import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthYear: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    agreeToGDPR: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const isNameValid = (name) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name);
  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isNameValid(formData.name)) {
      setError("Meno môže obsahovať iba písmená.");
      return;
    }
    if (!isNameValid(formData.surname)) {
      setError("Priezvisko môže obsahovať iba písmená.");
      return;
    }
    if (!isEmailValid(formData.email)) {
      setError("Zadajte platný email.");
      return;
    }
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(formData.birthYear, 10);
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
      setError("Zadajte platný rok narodenia.");
      return;
    }
    if (!formData.agreeToGDPR) {
      setError("Musíte súhlasiť so spracovaním osobných údajov (GDPR).");
      return;
    }
    if (formData.password.length < 8) {
      setError("Heslo musí obsahovať aspoň 8 znakov.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      setSuccess("Úspešne zaregistrovaný.");
      setTimeout(() => {
        navigate("/");
      }, 3000);
      setFormData({
        name: "",
        surname: "",
        birthYear: "",
        country: "",
        email: "",
        phone: "",
        password: "",
        agreeToGDPR: false,
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Chyba pri registrácii používateľa"
      );
    }
  };

  return (
    <div className="pt-20 flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Registračný Formulár
        </h2>
        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
        )}
        {success && (
          <p className="text-green-500 mb-4 text-center font-semibold">
            {success}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Meno*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Priezvisko*</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Rok narodenia*</label>
            <input
              type="number"
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Štát*</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Heslo*</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Telefón (Nepovinné)
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToGDPR"
              checked={formData.agreeToGDPR}
              onChange={handleChange}
              className="h-5 w-5 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
              required
            />
            <label className="ml-2 text-sm">
              Súhlasím so{" "}
              <Link
                to="/GDPR"
                className="text-teal-400 underline hover:text-teal-500"
              >
                spracovaním osobných údajov (GDPR)
              </Link>
              *
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 p-3 rounded text-white font-semibold transition duration-300"
          >
            Registrovať sa
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
