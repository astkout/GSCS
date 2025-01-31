// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const bookings = []; // Simulated in-memory storage (Replace with a database)

// app.post("/api/bookings", async (req, res) => {
//   const { name, email, date, time, service } = req.body;

//   if (!name || !email || !date || !time || !service) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Save the booking (Replace with a database save operation)
//   const booking = { name, email, date, time, service };
//   bookings.push(booking);

//   // Set up email notification
//   const transporter = nodemailer.createTransport({
//     service: "Gmail", // Replace with your email service
//     auth: {
//       user: "your-email@gmail.com", // Replace with your email
//       pass: "your-email-password", // Replace with your email password or app password
//     },
//   });

//   const mailOptions = {
//     from: "your-email@gmail.com",
//     to: "info@gogcleaning.co.uk", // Your email to receive the notification
//     subject: "New Appointment Booking",
//     text: `New appointment booked:
//       - Name: ${name}
//       - Email: ${email}
//       - Date: ${date}
//       - Time: ${time}
//       - Service: ${service}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Booking created successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to send email notification." });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

require("dotenv").config();  // Load environment variables from .env file
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const bookings = []; // Simulated in-memory storage (Replace with a database)

// Simulated payment gateway (use Stripe or PayPal in a real application)
const processPayment = (amount) => {
  // In a real implementation, you would interact with a payment API (e.g., Stripe)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful payment processing
      resolve({ success: true, amount });
    }, 1000); // Simulating a 1-second payment process
  });
};

// Handle booking
app.post("/api/bookings", async (req, res) => {
  const { name, email, date, time, service } = req.body;

  if (!name || !email || !date || !time || !service) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Simulate payment process (e.g., for a $100 booking)
  const paymentAmount = 100; // This should be dynamic based on the service
  const paymentResult = await processPayment(paymentAmount);

  if (!paymentResult.success) {
    return res.status(500).json({ message: "Payment processing failed." });
  }

  // Save the booking (Replace with a database save operation)
  const booking = { name, email, date, time, service, paymentAmount, status: 'confirmed' };
  bookings.push(booking);

  // Send confirmation email to admin
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Replace with your email service
    auth: {
      user: process.env.EMAIL_USER,  // Use the environment variable
      pass: process.env.EMAIL_PASS,  // Use the environment variable
    },
  });

  const adminMailOptions = {
    from: process.env.EMAIL_USER,  // Use the environment variable
    to: "info@gogcleaning.co.uk",  // Your email to receive the notification
    subject: "New Appointment Booking",
    text: `New appointment booked:
      - Name: ${name}
      - Email: ${email}
      - Date: ${date}
      - Time: ${time}
      - Service: ${service}
      - Amount Paid: $${paymentAmount}`,
  };

  // Send confirmation email to the customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER,  // Use the environment variable
    to: email,  // Send email to the customer
    subject: "Your Booking Confirmation",
    text: `Dear ${name},\n\nYour booking for the service "${service}" on ${date} at ${time} has been confirmed.\n\nThank you for choosing our service!`,
  };

  try {
    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    res.status(200).json({ message: "Booking created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email notification." });
  }
});

// Handle booking cancellation and refund
app.post("/api/cancelBooking", async (req, res) => {
  const { email } = req.body;

  const bookingIndex = bookings.findIndex((b) => b.email === email && b.status === 'confirmed');

  if (bookingIndex === -1) {
    return res.status(404).json({ message: "Booking not found or already cancelled." });
  }

  const booking = bookings[bookingIndex];
  const refundAmount = booking.paymentAmount * 0.75; // Refund 75% of the original amount

  // Simulate refund process (In a real case, integrate with a payment gateway like Stripe)
  const refundResult = { success: true, refundAmount };

  if (!refundResult.success) {
    return res.status(500).json({ message: "Refund failed." });
  }

  // Mark booking as cancelled
  bookings[bookingIndex].status = 'cancelled';

  // Send cancellation email to admin
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@gogcleaning.co.uk",
    subject: "Booking Cancellation",
    text: `A booking has been cancelled:
      - Name: ${booking.name}
      - Email: ${booking.email}
      - Date: ${booking.date}
      - Time: ${booking.time}
      - Service: ${booking.service}
      - Amount Refunded: $${refundAmount}`,
  };

  // Send cancellation email to the customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: booking.email,
    subject: "Booking Cancellation and Refund",
    text: `Dear ${booking.name},\n\nYour booking has been cancelled. You will receive a refund of $${refundAmount}.\n\nThank you for your understanding.`,
  };

  try {
    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    res.status(200).json({ message: "Booking cancelled and refund processed successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send cancellation email." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
