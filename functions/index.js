// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");
// const cors = require("cors")({ origin: true });

// // =============================
// // Gmail App Password Setup
// // =============================
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "dayagkent00@gmail.com",
//         pass: "jmlx oeti dkqv wchd"
//     }
// });

// // =============================
// // Welcome Email Function
// // =============================
// exports.sendWelcomeEmail = functions.https.onRequest((req, res) => {
//     cors(req, res, async () => {

//         const { email } = req.body;

//         try {
//             await transporter.sendMail({
//                 from: "dayagkent00@gmail.com",
//                 to: email,
//                 subject: "Welcome Back!",
//                 text: "Hello! You have successfully logged in to your account."
//             });

//             res.json({ status: "sent" });

//         } catch (err) {
//             console.error("Error sending welcome email:", err);
//             res.status(500).send(err);
//         }
//     });
// });

// // =============================
// // Failed Login Attempt Email
// // =============================
// exports.sendFailedLoginEmail = functions.https.onRequest((req, res) => {
//     cors(req, res, async () => {

//         const { email } = req.body;

//         try {
//             await transporter.sendMail({
//                 from: "dayagkent00@gmail.com",
//                 to: email,
//                 subject: "Failed Login Attempt",
//                 text: "Someone tried to access your account using the wrong password."
//             });

//             res.json({ status: "sent" });

//         } catch (err) {
//             console.error("Error sending failed login email:", err);
//             res.status(500).send(err);
//         }
//     });
// });
