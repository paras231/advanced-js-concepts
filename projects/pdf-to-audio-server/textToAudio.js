import gTTS from "gtts";
import translate from "translate-google";
import fs from "fs";

async function convertTexToAudio(text) {
  let englishSound;
  const generateEnglishSound = async () => {
    const englishValue = await translate(text, { to: "en" });
    const englishFilePath = `tmp/eng.mp3`;

    return new Promise((resolve, reject) => {
      let gtts3 = new gTTS(englishValue, "hi");
      gtts3.save(englishFilePath, (err, result) => {
        if (err) {
          reject(err);
        }

        const dataEngSound = fs.readFileSync(englishFilePath);
        const json2 = JSON.stringify({
          blob: dataEngSound.toString("base64"),
        });
        englishSound = JSON.parse(json2);
        resolve();
      });
    });
  };
  try {
    await Promise.all([generateEnglishSound()]);
    return { englishSound };
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default convertTexToAudio;
