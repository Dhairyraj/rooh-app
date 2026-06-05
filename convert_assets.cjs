const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

const sourceDir = path.join(__dirname, '..', 'Tanna Bachaooo');
const destDir = path.join(__dirname, 'public', 'himym');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function run() {
  console.log('Starting asset conversion...');

  // 1. Copy song
  const songSource = path.join(sourceDir, '_How I Met Your Mother_ Extended Theme Song.undefined');
  const songDest = path.join(destDir, 'theme.mp3');
  if (fs.existsSync(songSource)) {
    fs.copyFileSync(songSource, songDest);
    console.log('Copied song to public/himym/theme.mp3');
  } else {
    console.error('Song source not found:', songSource);
  }

  // 2. Convert / copy photos
  const mapping = [
    { src: 'IMG_2726.JPG.jpeg', dest: 'photo1.jpg', isHeic: false },
    { src: 'IMG_2841.JPG.jpeg', dest: 'photo2.jpg', isHeic: false },
    { src: 'IMG_2885.JPG.jpeg', dest: 'photo3.jpg', isHeic: false },
    { src: 'IMG_2884.PNG', dest: 'photo4.png', isHeic: false },
    { src: 'IMG_2516.HEIC', dest: 'photo5.jpg', isHeic: true },
    { src: 'IMG_2506.HEIC', dest: 'photo6.jpg', isHeic: true },
    { src: 'IMG_2447.HEIC', dest: 'photo7.jpg', isHeic: true },
    { src: 'IMG_0664.HEIC', dest: 'photo8.jpg', isHeic: true },
  ];

  for (const item of mapping) {
    const srcPath = path.join(sourceDir, item.src);
    const destPath = path.join(destDir, item.dest);

    if (!fs.existsSync(srcPath)) {
      console.error(`Source file not found: ${srcPath}`);
      continue;
    }

    if (item.isHeic) {
      console.log(`Converting ${item.src} to ${item.dest}...`);
      const inputBuffer = fs.readFileSync(srcPath);
      try {
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.85
        });
        fs.writeFileSync(destPath, outputBuffer);
        console.log(`Converted and saved to ${destPath}`);
      } catch (err) {
        console.error(`Error converting ${item.src}:`, err);
      }
    } else {
      console.log(`Copying ${item.src} to ${item.dest}...`);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied and saved to ${destPath}`);
    }
  }

  console.log('Asset conversion complete!');
}

run().catch(console.error);
