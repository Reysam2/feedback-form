# 📝 Feedback Form with Validation & Google Sheets Integration

This project is a **Feedback Form** built with HTML, CSS, and JavaScript that validates user input before submission.  
Once all validations pass, the data is sent directly to **Google Sheets** via a **linked Google Form**.

---

## 🚀 Features

- **Email Validation**  
  Ensures the entered email address follows the correct format (`example@domain.com`).

- **Age Validation**  
  Accepts only numbers between **18** and **99**.

- **Word Count Limit**  
  Restricts the feedback message to a maximum of **100 words**.

- **Character Limit**  
  Restricts the feedback message to **5000 characters**.

- **Real-time Error Messages**  
  Displays clear, user-friendly error messages for invalid inputs.

- **Google Sheets Submission**  
  Valid data is submitted to Google Sheets through a Google Form backend.

---

## 📋 Requirements

- HTML5 for the form structure.
- CSS for styling.
- JavaScript for validation logic.
- A Google Form linked to a Google Sheet.

---

## 🛠️ How It Works

1. **Email Input**
   - Checked against a regex pattern to ensure proper email formatting.

2. **Age Input**
   - Checked to ensure the value is a number between 18 and 99.

3. **Message Textarea**
   - Word count is calculated by splitting the text on spaces.
   - Character count is taken directly from the string length.
   - Both limits are enforced before submission.

4. **Validation Feedback**
   - Error messages appear immediately when a rule is violated.
   - The form will not submit until all issues are resolved.

5. **Google Sheets Integration**
   - A Google Form is linked to a Google Sheet.
   - The HTML form submits to the Google Form's `formResponse` URL using the correct `name` attributes for each field.
   - Google Sheets automatically records each submission.

---

## 📂 Project Structure

```plaintext
project/
│
├── index.html   # Form structure
├── style.css    # Optional styling
└── script.js    # Validation + Google Sheets submission


---

## 💻 Setup & Usage

1. Clone or download this repository.
2. Create a **Google Form** with fields for:
   - Email
   - Age
   - Feedback Message
3. Link the Google Form to a Google Sheet (Google does this automatically).
4. Open the Google Form in your browser.
5. Right-click → **Inspect** and find the `name` attributes for each input field (e.g., `entry.123456`).
6. Replace the placeholders in `index.html` with your actual Google Form field names.
7. Open `index.html` in your browser.
8. Fill out the form and click **Submit**.  
   - If valid, your data will appear in the linked Google Sheet.
   - If invalid, error messages will guide you.

---

## 🔍 Example Validation Rules

- Email: `user@example.com` ✅  
- Age: `25` ✅  
- Feedback: ≤ 100 words and ≤ 5000 characters ✅  ![enter image description here](assets/screenshots)

---

## 📸 Screenshot 
<p align="center"> <img src="https://github.com/Reysam2/feedback-form/blob/main/assets/screenshots/feedback-form-valid.png" alt="Feedback Form - Valid" width="45%"> &nbsp; <img src="https://github.com/Reysam2/feedback-form/blob/main/assets/screenshots/feedback-form-invalid.png" alt="Feedback Form - Invalid" width="45%"> </p>

## 📜 License

This project is licensed under the MIT License.  
Feel free to use, modify, and share it for learning or personal projects.

---
