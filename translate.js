import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const language = {
    source: { openai: "norwegian", google: "no" },
    destination: { openai: "english", google: "en" },
};

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function aiTranslate(input) {
    const response = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You will be provided with a sentence in ${language.source.openai}, and your task is to translate it into ${language.destination.openai}. Preserve linebreaks and formating. If an empty string is provided, return an empty string`,
            },
            { role: "user", content: input },
        ],
        model: "gpt-3.5-turbo",
    });

    const output = response.choices[0].message.content;
    return output;
}

async function googleTranslate(input) {
    const url =
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
        language.source.google +
        "&tl=" +
        language.destination.google +
        "&dt=t&q=" +
        encodeURI(input);

    const res = await fetch(url);
    const json = await res.json();
    if (!json[0]) {
        return "";
    }
    const translatedLines = json[0].map((arr) => {
        return arr[0];
    });
    return translatedLines.join("");
}

export { aiTranslate, googleTranslate };
