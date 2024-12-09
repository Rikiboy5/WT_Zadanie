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

// Získať všetkých používateľov
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Chyba pri načítaní používateľov." });
  }
});

// Upraviť používateľa
router.put("/:id", async (req, res) => {
  const { name, surname, birthYear, country, email, phone, agreeToGDPR } = req.body;
  try {
    // Nájsť používateľa podľa ID
    const user = await User.findById(req.params.id);

    // Ak používateľ neexistuje
    if (!user) {
      return res.status(404).json({ message: "Používateľ nenájdený." });
    }

    // Aktualizovať údaje používateľa
    user.name = name || user.name;
    user.surname = surname || user.surname;
    user.birthYear = birthYear || user.birthYear;
    user.country = country || user.country;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.agreeToGDPR = agreeToGDPR || user.agreeToGDPR;

    await user.save();
    res.json({ message: "Používateľ úspešne upravený." });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Chyba pri úprave používateľa." });
  }
});

// Odstrániť používateľa
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Používateľ nenájdený." });
    }

    res.json({ message: "Používateľ bol vymazaný." });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Chyba pri mazaniu používateľa." });
  }
});

export default router;
