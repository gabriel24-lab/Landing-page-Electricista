import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, "public");

const compressImages = async () => {
  const files = fs.readdirSync(publicDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if ([".jpg", ".jpeg", ".png"].includes(ext)) {
      const filePath = path.join(publicDir, file);
      // Let's keep Icono.jpeg as is, because it's referenced directly as favicon and might be better left untouched
      if (file === "Icono.jpeg") {
        console.log("Skipping Icono.jpeg (favicon)");
        continue;
      }
      const outputFilename = `${path.basename(file, path.extname(file))}.webp`;
      const outputPath = path.join(publicDir, outputFilename);

      try {
        await sharp(filePath).webp({ quality: 80 }).toFile(outputPath);

        console.log(`Converted: ${file} -> ${outputFilename}`);
        if (file !== outputFilename) {
          fs.unlinkSync(filePath);
          console.log(`Deleted original: ${file}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  console.log("Image compression completed!");
};

compressImages();
