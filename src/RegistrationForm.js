import { useState } from "react";
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

  const eventsList = [
    "PAPER PARADE (Offline/Online)",
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
    "UIPATH UNLOCKED- WORKSHOP (Offline/Online)",
  ];

  const departments = ["CSE", "IT", "CSBS", "AIDS", "AI/ML", "CYBERSECURITY", "Others"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Block Ramco students
    if (name === "college" && value === "Ramco Institution of Technology") {
      alert("🚫 Registration closed for Ramco students.");
      return;
    }

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

      if (prev.selectedEvents.length >= 4) {
        alert("You can select a maximum of 4 events.");
        return prev;
      }

      return {
        ...prev,
        selectedEvents: [...prev.selectedEvents, event],
      };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (!validTypes.includes(file.type)) {
      alert("Upload JPG or PNG image only.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be under 5MB.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      paymentScreenshot: file,
    }));
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
      alert("Enter a valid email address.");
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.mobileNumber)) {
      alert("Enter a valid 10 digit phone number.");
      return;
    }

    // Screenshot required
    if (!formData.paymentScreenshot) {
      alert("Upload payment screenshot.");
      return;
    }

    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobileNumber", formData.mobileNumber);
    formDataToSend.append("college", formData.collegeName);
    formDataToSend.append("department", formData.department);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("selectedEvents", formData.selectedEvents.join(", "));

    const base64Image = await fileToBase64(formData.paymentScreenshot);
    formDataToSend.append("paymentScreenshot", base64Image);

    fetch("https://script.google.com/macros/s/AKfycby4MBHoPwX4F4aNadzI4jGta-t2GH_HVBv8-S35yAsEvM4zxDbv-BH73TP9mTLVjYy8/exec", {
      method: "POST",
      body: formDataToSend,
    })
      .then((res) => res.text())
      .then(() => {
        alert("🎉 Registration successful!");
        onClose();
      })
      .catch(() => {
        alert("❌ Submission failed.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="registration-modal-overlay" onClick={onClose}>
      <div className="registration-modal" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close-btn" onClick={onClose}>✕</button>

        <h2 className="modal-title">Event Registration</h2>

        <form onSubmit={handleSubmit} className="registration-form">

          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Mobile *</label>
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} maxLength="10" required />
          </div>

          <div className="form-group">
            <label>College *</label>
            <select name="college" value={formData.college} onChange={handleInputChange} required>
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
                value={formData.collegeName}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Department *</label>
            <select name="department" value={formData.department} onChange={handleInputChange} required>
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Year *</label>
            <select name="year" value={formData.year} onChange={handleInputChange} required>
              <option value="">Select Year</option>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Events (Max 4)</label>
            {eventsList.map((event) => (
              <label key={event} style={{display:"block"}}>
                <input
                  type="checkbox"
                  checked={formData.selectedEvents.includes(event)}
                  onChange={() => handleEventToggle(event)}
                />
                {event}
              </label>
            ))}
          </div>

          {formData.college === "Other" && (
            <>
              <div className="form-group">
                <label>Scan to Pay (₹200)</label>
                <img src={require("./assets/qr-code.png")} alt="QR" className="qr-image"/>
              </div>

              <div className="form-group">
                <label>Upload Payment Screenshot *</label>
                <input type="file" accept="image/png,image/jpeg" onChange={handleFileChange}/>
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="submit" className="submit-btn">Complete Registration</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>

        </form>
      </div>
    </div>
  );
}