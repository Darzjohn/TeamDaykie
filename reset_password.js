import { auth } from "../firebase.js";
import {
    sendPasswordResetEmail,
    verifyPasswordResetCode,
    confirmPasswordReset
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Detect if user clicked email reset link
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get("oobCode");

const stepRequest = document.getElementById("step-request");
const stepReset = document.getElementById("step-reset");

// If oobCode exists → show new password UI
if (oobCode) {
    stepRequest.classList.add("hidden");
    stepReset.classList.remove("hidden");
}

// STEP 1: Send reset email
window.sendReset = async function () {
    const email = document.getElementById("email").value;

    try {
        await sendPasswordResetEmail(auth, email);

        Swal.fire({
            icon: "success",
            title: "Reset Email Sent!",
            html: `A reset link was sent to:<br><strong>${email}</strong>`,
            confirmButtonColor: "#1a73e8"
        });
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Reset Failed",
            text: "Invalid email or user does not exist."
        });
    }
};

// STEP 2: Apply new password
window.doReset = async function () {
    const newPass = document.getElementById("newPass").value;
    const confirmPass = document.getElementById("confirmPass").value;

    if (newPass !== confirmPass) {
        Swal.fire({
            icon: "error",
            title: "Password Mismatch",
            text: "Passwords do not match."
        });
        return;
    }

    try {
        await verifyPasswordResetCode(auth, oobCode);
        await confirmPasswordReset(auth, oobCode, newPass);

        Swal.fire({
            icon: "success",
            title: "Password Updated!",
            text: "Your password has been successfully changed.",
            confirmButtonColor: "#1a73e8"
        }).then(() => {
            window.location.href = "../login.html";
        });

    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Reset Failed",
            text: "Reset link is invalid or expired."
        });
    }
};
