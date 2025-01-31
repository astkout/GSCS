const express = require("express");
const mongoose = require("mongoose");
const stripe = require("stripe")("your_stripe_secret_key");
const twilio = require("twilio")("your_twilio_account_sid", "your_twilio_auth_token");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/booking_system", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Booking Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  paymentId: String, // Stripe payment ID
  status: { type: String, default: "booked" }, // booked, canceled
});

const Booking = mongoose.model("Booking", bookingSchema);

// Create a Booking
app.post("/api/bookings", async (req, res) => {
  const { name, email, date, time } = req.body;

  try {
    // Create a Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000, // $100.00 (in cents)
      currency: "usd",
      payment_method_types: ["card"],
    });

    // Save booking to database
    const booking = new Booking({
      name,
      email,
      date,
      time,
      paymentId: paymentIntent.id,
    });
    await booking.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your_email@gmail.com",
        pass: "your_email_password",
      },
    });

    const mailOptions = {
      from: "your_email@gmail.com",
      to: email,
      subject: "Booking Confirmation",
      text: `Hi ${name}, your booking for ${date} at ${time} has been confirmed.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // Send SMS notification to admin
    twilio.messages.create({
      body: `New booking from ${name} for ${date} at ${time}.`,
      from: "+1234567890", // Your Twilio number
      to: "+0987654321", // Admin's phone number
    });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: "Booking failed" });
  }
});

// Cancel a Booking
app.post("/api/bookings/cancel/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Refund 70% of the payment
    const refund = await stripe.refunds.create({
      payment_intent: booking.paymentId,
      amount: 7000, // 70% of $100.00 (in cents)
    });

    // Update booking status
    booking.status = "canceled";
    await booking.save();

    // Send cancellation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your_email@gmail.com",
        pass: "your_email_password",
      },
    });

    const mailOptions = {
      from: "your_email@gmail.com",
      to: booking.email,
      subject: "Booking Cancellation",
      text: `Hi ${booking.name}, your booking for ${booking.date} at ${booking.time} has been canceled. A refund of 70% has been processed.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // Send SMS notification to admin
    twilio.messages.create({
      body: `Booking canceled by ${booking.name} for ${booking.date} at ${booking.time}.`,
      from: "+1234567890", // Your Twilio number
      to: "+0987654321", // Admin's phone number
    });

    res.status(200).json({ message: "Booking canceled and refund processed" });
  } catch (error) {
    res.status(500).json({ error: "Cancellation failed" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});