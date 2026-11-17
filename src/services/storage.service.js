const ImageKit = require('@imagekit/nodejs').default || require('@imagekit/nodejs');

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file) {
  const result = await client.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "spotifyclone/music",
  });
  return result;
}

module.exports = { uploadFile };
