// routes/users.js
import express from "express";
import validator from "validator";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";

// Registrácia užívateľa
router.post("/register", async (req, res) => {
  try {
    const {
      name,
      surname,
      birthYear,
      country,
      email,
      phone,
      password,
      agreeToGDPR,
    } = req.body;

    // Overenie povinných polí
    if (
      !name ||
      !surname ||
      !birthYear ||
      !country ||
      !email ||
      !password ||
      agreeToGDPR === undefined
    ) {
      return res.status(400).json({ message: "Vyplňte všetky povinné polia." });
    }

    // Validácia mena
    if (!validator.isAlpha(name, "sk-SK", { ignore: " " })) {
      return res
        .status(400)
        .json({ message: "Meno môže obsahovať iba písmená." });
    }

    // Validácia emailu
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Neplatný formát emailu." });
    }
    // Validácia hesla
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Heslo musí obsahovať aspoň 8 znakov." });
    }

    // Validácia roku narodenia
    const currentYear = new Date().getFullYear();
    if (
      !validator.isInt(birthYear.toString(), { min: 1900, max: currentYear })
    ) {
      return res.status(400).json({ message: "Neplatný rok narodenia." });
    }

    // Validácia GDPR súhlasu
    if (agreeToGDPR !== true) {
      return res.status(400).json({
        message: "Musíte súhlasiť so spracovaním osobných údajov (GDPR).",
      });
    }

    // Skontroluj, či email už neexistuje
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email už existuje." });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Vytvorenie nového užívateľa
    const user = new User({
      name,
      surname,
      birthYear,
      country,
      email,
      phone,
      password: hashedPassword,
      agreeToGDPR,
    });

    await user.save();
    res.status(201).json({ message: "Registrácia úspešná." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Serverová chyba." });
  }
});

export default router;
