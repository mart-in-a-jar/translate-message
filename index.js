import express from "express";
import { googleTranslate, aiTranslate } from "./functions/translate.js";

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { getUser } from "./controllers/userController.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

const translate = express.Router();

app.post("/api/login", getUser);
app.use("/api/translate", translate);

translate.post("/google", async (req, res) => {
    const input = req.body.input;
    const translated = await googleTranslate(input);
    res.json({ data: translated });
});

translate.post("/ai", async (req, res) => {
    const input = req.body.input;
    const translated = await aiTranslate(input);
    res.json({ data: translated });
});

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

app.listen(3000);
