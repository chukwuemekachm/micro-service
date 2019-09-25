export function isValidImageFormat(url) {
  const imageFormats = ['.jpg', '.jpeg', '.png', '.gif'];
  let isValid = false;

  if (typeof url !== 'string') return false;
  imageFormats.forEach((format) => {
    if (url.includes(format)) {
      isValid = true;
    }
  });

  return isValid;
}
