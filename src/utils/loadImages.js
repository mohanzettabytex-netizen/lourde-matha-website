// src/utils/loadImages.js
export function loadImagesFromFolder(folders) {
  if (!Array.isArray(folders)) folders = [folders];

  const images = [];

  const context = require.context(
    "../Assets",      // ⚠️ CHANGE TO ../assets IF NEEDED
    true,
    /\.(png|jpe?g|webp)$/i
  );

  context.keys().forEach((key) => {
    folders.forEach((folder) => {
      if (key.includes(`/${folder}/`)) {
        images.push(context(key));
      }
    });
  });

  console.log("Loaded gallery images:", images);
  return images;
}
