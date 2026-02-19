import { useState } from "react";
import "./registration.css";

export default function RegistrationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    college: "",
    department: "",
    year: "",
    selectedEvents: [],
    paymentScreenshot: null,
  });

  const eventsList = [
    "TECHPRESENTX",
    "THINK & INK",
    "PROTOSHOW",
    "TECH-TRAID",
    "CODE ARENA",
    "MYSTERY MANOR",
    "THE BOARDROOM",
    "BLABBER BOX",
    "TUNE TREK",
    "THE FRANCHISE TABLE",
    "404 HUMAN NOT FOUND",
    "DIGITAL FORENSIC WORKSHOP",
  ];

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
      return {
        ...prev,
        selectedEvents: isSelected
          ? prev.selectedEvents.filter((e) => e !== event)
          : [...prev.selectedEvents, event],
      };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        paymentScreenshot: file,
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (
    !formData.name ||
    !formData.email ||
    !formData.mobileNumber ||
    !formData.college ||
    !formData.department ||
    !formData.year ||
    formData.selectedEvents.length === 0 ||
    !formData.paymentScreenshot
  ) {
    alert("Please fill all required fields and upload payment screenshot!");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Mobile validation
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(formData.mobileNumber)) {
    alert("Enter valid 10-digit mobile number!");
    return;
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzE7_uLIUpnu13Y_87AJNFy_S3wkRBVi3NzA9tqnCr4xLpG1xO21MTmTTHZ4nRPM9PQIA/exec",
      {
        method: "POST",
        mode: "no-cors", // 🔥 THIS FIXES THE ERROR
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          college: formData.college,
          department: formData.department,
          year: formData.year,
          selectedEvents: formData.selectedEvents,
        }),
      }
    );

    // We cannot read response in no-cors mode
    alert("Registration Submitted Successfully!");
    resetForm();
    onClose();

  } catch (error) {
    console.error("Submission error:", error);
    alert("Submission failed. Check console.");
  }
};


  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      college: "",
      department: "",
      year: "",
      selectedEvents: [],
      paymentScreenshot: null,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="registration-modal-overlay" onClick={onClose}>
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
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              required
            />
          </div>

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
              {eventsList.map((event) => (
                <label key={event}>
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

          {/* File Upload */}
          <div className="form-group">
            <label htmlFor="paymentScreenshot">Payment Screenshot *</label>
            <div className="file-upload-container">
              <input
                type="file"
                id="paymentScreenshot"
                name="paymentScreenshot"
                accept="image/*"
                onChange={handleFileChange}
                required
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
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
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
