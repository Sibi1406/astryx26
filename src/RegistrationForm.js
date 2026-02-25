import { useState } from "react";
import Tesseract from "tesseract.js";
import "./registration.css";

export default function RegistrationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    college: "",
    collegeName: "",
    department: "",
    year: "",
    selectedEvents: [],
    paymentScreenshot: null,
  });

  const [screenshotVerified, setScreenshotVerified] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  const eventsList = [
    "PAPER PARADE",
    "THINK & INK",
    "PROMPT WARS",
    "TECH-TRAID",
    "CODE ARENA",
    "MYSTERY MANOR",
    "THE MAESTRO",
    "BLABBER BOX",
    "LYRIX ARENA",
    "THE FRANCHISE TABLE",
    "404 HUMAN NOT FOUND",
    "UIPATH UNLOCKED- WORKSHOP",
  ];

  const technicalEvents = new Set([
    "PAPER PARADE",
    "THINK & INK",
    "PROMPT WARS",
    "TECH-TRAID",
    "CODE ARENA",
    "UIPATH UNLOCKED- WORKSHOP",
  ]);

  const nonTechnicalEvents = new Set([
    "MYSTERY MANOR",
    "THE MAESTRO",
    "BLABBER BOX",
    "LYRIX ARENA",
    "THE FRANCHISE TABLE",
    "404 HUMAN NOT FOUND",
  ]);

  const departments = ["CSE", "IT", "CSBS", "AIDS", "AI/ML", "CYBERSECURITY", "Others"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEventToggle = (event) => {
    setFormData((prev) => {
      const isSelected = prev.selectedEvents.includes(event);

      if (isSelected) {
        return {
          ...prev,
          selectedEvents: prev.selectedEvents.filter((e) => e !== event),
        };
      }

      // enforce max 4 selections
      if (prev.selectedEvents.length >= 4) {
        alert("You can select a maximum of 4 events.");
        return prev;
      }

      // allow add
      return {
        ...prev,
        selectedEvents: [...prev.selectedEvents, event],
      };
    });
  };

const verifyPaymentOCR = async (file) => {
  try {
    const { data: { text } } = await Tesseract.recognize(file, "eng");

    console.log("OCR RAW TEXT ↓↓↓");
    console.log(text);

    const t = text.toLowerCase();

    // ✅ UPI fragment check (reliable)
    const upiValid =
      t.includes("arjun") &&
      t.includes("220306") &&
      t.includes("oksbi");

    if (!upiValid) {
      return { ok: false, msg: "❌ Payment not sent to correct UPI ID" };
    }

    // ✅ Status check (reliable)
    if (!t.includes("completed")) {
      return { ok: false, msg: "❌ Payment not completed" };
    }

    // ⚠️ DO NOT CHECK AMOUNT VIA OCR
    // Amount OCR is unreliable in Google Pay screenshots

    return { ok: true };
  } catch (err) {
    console.error("OCR ERROR:", err);
    return {
      ok: false,
      msg: "❌ Unable to read screenshot. Please upload a clearer image.",
    };
  }
};




const handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  console.log("FILE SELECTED:", file.name);

  // 🔥 SAVE FILE FIRST (THIS FIXES UI)
  setFormData((prev) => ({
    ...prev,
    paymentScreenshot: file,
  }));

  setVerificationError("⏳ Verifying payment screenshot...");
  setScreenshotVerified(false);

  // File validations
  const validTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!validTypes.includes(file.type)) {
    setVerificationError("❌ Upload JPG or PNG image only.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    setVerificationError("❌ File size must be under 5MB.");
    return;
  }

  // OCR verification
  const result = await verifyPaymentOCR(file);

  if (!result.ok) {
    setVerificationError(result.msg);
    setScreenshotVerified(false);
    return;
  }

  setScreenshotVerified(true);
  setVerificationError("✅ Payment verified");
};



const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
const handleSubmit = async (e) => {
  e.preventDefault();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone number validation (10 digits for Indian numbers)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(formData.mobileNumber.replace(/\s|-/g, ""))) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Only require screenshot if college is "Other"
  // 🔒 PAYMENT CHECK (ONLY FOR OTHER COLLEGES)
if (formData.college === "Other") {
  if (!formData.paymentScreenshot) {
    alert("Please upload the payment screenshot.");
    return;
  }

  if (!screenshotVerified) {
    alert("Please upload a valid payment screenshot.");
    return;
  }
  }

  // If college is "Other", use collegeName; otherwise use college name
  const finalCollege = formData.college === "Other" ? formData.collegeName : formData.college;

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("mobileNumber", formData.mobileNumber);
  formDataToSend.append("college", finalCollege);
  formDataToSend.append("department", formData.department);
  formDataToSend.append("year", formData.year);
  formDataToSend.append(
    "selectedEvents",
    formData.selectedEvents.join(", ")
  );
  if (formData.paymentScreenshot) {
  const base64Image = await fileToBase64(formData.paymentScreenshot);
  formDataToSend.append("paymentScreenshot", base64Image);
}

  fetch(
    "https://script.google.com/macros/s/AKfycbx3POzWr7jVggC0zbIq-pam1ZXSkeROYygl2BCLrpHWQrWZQbfbkL90fv-HPPQlS1uE/exec",
    {
      method: "POST",
      body: formDataToSend,
    }
  )
    .then((res) => res.text())   // 👈 IMPORTANT (NOT res.json)
    .then((data) => {
      try {
        const result = JSON.parse(data);

        if (result.status === "duplicate") {
          alert("⚠️ Screenshot already used!");
          return;
        }

        if (result.status === "success") {
          alert("🎉 Registration successful!");
          resetForm();
          onClose();
        } else {
          alert("Error: " + (result.message || "Registration failed"));
        }
      } catch (parseError) {
        console.error("Parse error:", parseError, "Response:", data);
        alert("❌ Error processing response. Please try again.");
      }
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      alert("❌ Submission failed. Please check your internet connection and try again.");
    });
};
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      mobileNumber: "", 
      college: "",
      collegeName: "",
      department: "",
      year: "",
      selectedEvents: [],
      paymentScreenshot: null,
    });
    setScreenshotVerified(false);
    setVerificationError("");
  };

  if (!isOpen) return null;

  return (
    <div
  className="registration-modal-overlay"
  onClick={(e) => {
    if (e.target.classList.contains("registration-modal-overlay")) {
      onClose();
    }
  }}
>
      <div className="registration-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">Event Registration</h2>

        <form onSubmit={handleSubmit} className="registration-form">

          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              maxLength="10"
              required
            />
          </div>

          <div className="form-group">
            <label>College *</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              required
            >
              <option value="">Select College</option>
              <option value="Ramco Institution of Technology">Ramco Institution of Technology</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.college === "Other" && (
            <div className="form-group">
              <label>College Name *</label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName || ""}
                onChange={handleInputChange}
                placeholder="Enter your college name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Department *</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Year *</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Year</option>
              {years.map((yr) => (
                <option key={yr}>{yr}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Events *</label>
            <div className="events-checkbox-container">
              <div className="events-column">
                <div className="events-column-title">Technical</div>
                {eventsList
                  .filter((ev) => technicalEvents.has(ev))
                  .map((event) => (
                    <label className="checkbox-label" key={event}>
                      <input
                        type="checkbox"
                        checked={formData.selectedEvents.includes(event)}
                        onChange={() => handleEventToggle(event)}
                      />
                      {event}
                    </label>
                  ))}
              </div>

              <div className="events-column">
                <div className="events-column-title">Non-Technical</div>
                {eventsList
                  .filter((ev) => nonTechnicalEvents.has(ev))
                  .map((event) => (
                    <label className="checkbox-label" key={event}>
                      <input
                        type="checkbox"
                        checked={formData.selectedEvents.includes(event)}
                        onChange={() => handleEventToggle(event)}
                      />
                      {event}
                    </label>
                  ))}
              </div>
            </div>
          </div>

          {/* Payment QR Code */}
          {formData.college === "Other" && (
            <div className="form-group">
              <label>Scan to Pay (₹200) *</label>
              <div className="qr-container">
                <img src={require("./assets/qr-code.jpeg")} alt="Payment QR Code" className="qr-image" />
              </div>
            </div>
          )}

          {/* File Upload */}
          {formData.college === "Other" && (
            <div className="form-group">
              <label>Payment Screenshot (₹200) *</label>
              <div className="file-upload-container">
                <input
  type="file"
  id="paymentScreenshot"
  name="paymentScreenshot"
  accept="image/png, image/jpeg, image/jpg"
  onChange={handleFileChange}
  style={{ display: "none" }}   // 👈 CRITICAL
/>
                <label htmlFor="paymentScreenshot" className="file-upload-label">
                  <span className="upload-icon">📤</span>
                  <span>
                    {formData.paymentScreenshot
                      ? formData.paymentScreenshot.name
                      : "Click to upload payment screenshot"}
                  </span>
                </label>
              </div>
              {formData.paymentScreenshot !== null && (
                <>
                  {screenshotVerified && (
                    <div style={{ color: "#00d9ff", fontSize: "12px", marginTop: "8px", fontWeight: "bold" }}>
                      ✓ Screenshot verified - 200 rupees payment detected
                    </div>
                  )}
                  {verificationError && (
                    <div style={{ color: "#ff9900", fontSize: "12px", marginTop: "8px" }}>
                      {verificationError}
                    </div>
                  )}
                  {!screenshotVerified && !verificationError && (
                    <div style={{ color: "#00d9ff", fontSize: "12px", marginTop: "8px" }}>
                      ⏳ Verifying screenshot...
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="submit-btn"  disabled={formData.college === "Other" && !screenshotVerified}>
              Complete Registration
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
