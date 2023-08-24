const getDominantImageColor = async (imageUrl, colorThief) =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.src = imageUrl;
    image.crossOrigin = "Anonymous";

    image.onload = () => resolve(colorThief.getColor(image));
    image.oneeror = () => reject();
  });

export default getDominantImageColor;
