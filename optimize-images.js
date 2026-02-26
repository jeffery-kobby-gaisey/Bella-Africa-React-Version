const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = './public/gallery';
const outputDir = './public/gallery-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .jpeg({ quality: 80, progressive: true })
      .resize(1200, 1200, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savedBytes = inputStats.size - outputStats.size;
    const savedPercent = ((savedBytes / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB (saved ${savedPercent}%)`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(galleryDir);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
  
  console.log(`Found ${imageFiles.length} images to optimize...\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(galleryDir, file);
    const outputPath = path.join(outputDir, file);
    
    const inputStats = fs.statSync(inputPath);
    totalOriginal += inputStats.size;
    
    await optimizeImage(inputPath, outputPath);
    
    const outputStats = fs.statSync(outputPath);
    totalOptimized += outputStats.size;
  }
  
  console.log(`\n=== Summary ===`);
  console.log(`Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized size: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)}MB (${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`\nOptimized images saved to: ${outputDir}`);
  console.log(`Review the images, then replace the original gallery folder with the optimized one.`);
}

optimizeAllImages().catch(console.error);
