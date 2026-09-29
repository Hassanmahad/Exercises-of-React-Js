
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
    country: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle all inputs
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    console.log(formData)
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Country */}
        <div>
          <label>Country</label>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="Somalia">Somalia</option>
            <option value="Kenya">Kenya</option>
            <option value="Ethiopia">Ethiopia</option>
          </select>
        </div>

        {/* Checkbox */}
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />

          <label>I agree to the terms</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>

          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Country: {submittedData.country}</p>
          <p>
            Agreed: {submittedData.agree ? "Yes" : "No"}
          </p>
        </div>
      )} */}
    </div>
  );
}

export default App;

