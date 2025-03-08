/**
 * This script generates mobile-optimized versions of images
 * It uses Sharp to resize and optimize images for mobile devices
 *
 * Usage:
 * 1. Install dependencies: npm install sharp glob
 * 2. Run: node scripts/generate-mobile-images.js
 */

const sharp = require("sharp");
const glob = require("glob");
const path = require("path");
const fs = require("fs");

// Configuration
const sourceDir = "src/assets";
const mobileWidth = 640; // Width for mobile images
const quality = 80; // Quality for WebP images (0-100)

// Find all images in the source directory
glob(`${sourceDir}/**/*.{jpg,jpeg,png,webp}`, {}, (err, files) => {
  if (err) {
    console.error("Error finding files:", err);
    return;
  }

  console.log(`Found ${files.length} images to process`);

  // Process each image
  files.forEach((file) => {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const dirname = path.dirname(file);

    // Skip if it's already a mobile version
    if (basename.includes("-mobile")) {
      return;
    }

    // Define output path
    const outputPath = path.join(dirname, `${basename}-mobile${ext}`);

    // Check if mobile version already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Mobile version already exists for ${file}`);
      return;
    }

    // Process the image
    console.log(`Processing ${file}...`);

    // Create a processing pipeline
    let pipeline = sharp(file).resize(mobileWidth, null, {
      fit: "inside",
      withoutEnlargement: true,
    });

    // If it's a WebP image, set the quality
    if (ext.toLowerCase() === ".webp") {
      pipeline = pipeline.webp({ quality });
    }

    // Save the processed image
    pipeline
      .toFile(outputPath)
      .then(() => {
        console.log(`Created mobile version: ${outputPath}`);
      })
      .catch((err) => {
        console.error(`Error processing ${file}:`, err);
      });
  });
});
