const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public', 'images');

const optimizeImages = async (dir) => {
    fs.readdir(dir, { withFileTypes: true }, async (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        for (const file of files) {
            const fullPath = path.join(dir, file.name);

            if (file.isDirectory()) {
                await optimizeImages(fullPath);
            } else if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
                try {
                    const tempPath = fullPath + '.tmp';
                    const stats = fs.statSync(fullPath);
                    const originalSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

                    let sharpInstance = sharp(fullPath);

                    if (/\.(jpg|jpeg)$/i.test(file.name)) {
                        sharpInstance = sharpInstance.jpeg({ quality: 60, progressive: true });
                    } else if (/\.png$/i.test(file.name)) {
                        sharpInstance = sharpInstance.png({ quality: 60, compressionLevel: 9 });
                    }

                    // Resize if width is larger than 1920px (full HD)
                    const metadata = await sharpInstance.metadata();
                    if (metadata.width > 1920) {
                        sharpInstance = sharpInstance.resize({ width: 1920, withoutEnlargement: true });
                    }

                    await sharpInstance.toFile(tempPath);

                    fs.renameSync(tempPath, fullPath);

                    const newStats = fs.statSync(fullPath);
                    const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);

                    if (originalSizeMB !== newSizeMB) {
                        console.log(`Optimized ${file.name}: ${originalSizeMB}MB -> ${newSizeMB}MB`);
                    }

                } catch (error) {
                    console.error(`Error optimizing ${file.name}:`, error);
                }
            }
        }
    });
};

console.log("Starting image optimization...");
optimizeImages(directoryPath);
