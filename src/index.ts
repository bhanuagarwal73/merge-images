import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

export default class MergeImages {

    public async mergeVeritically(images: string[], outputPath: string) {
        // Load each image and get their dimensions
        const imagePromises = images.map((imagePath) => loadImage(imagePath));
        const imagesData = await Promise.all(imagePromises);
        const maxWidth = Math.max(...imagesData.map((img) => img.width));
        const totalHeight = imagesData.reduce((sum, img) => sum + img.height, 0);

        // Set canvas dimensions
        const canvas = createCanvas(maxWidth, totalHeight);
        const ctx = canvas.getContext('2d');

        // Paste each image onto the canvas vertically
        let currentY = 0;
        for (const imgData of imagesData) {
            ctx.drawImage(imgData, 0, currentY);
            currentY += imgData.height;
        }

        // Save the merged image
        const output = fs.createWriteStream(outputPath);
        const stream = canvas.createPNGStream();
        stream.pipe(output);

        return new Promise((resolve, reject) => {
            output.on('finish', resolve);
            output.on('error', reject);
        });
    }
}