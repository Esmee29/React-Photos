import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/styles.css";

// Dynamically import all images in the Analogue folder that match the pattern
const images = import.meta.glob('/src/assets/Photos/*.{jpg,jpeg,png}', { eager: true });

const Photos = Object.keys(images).map(filePath => {
  const img = new Image();
  img.src = images[filePath].default;

  return {
    src: images[filePath].default,
    width: img.width,   // Use the actual image width
    height: img.height, // Use the actual image height
  };
});

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the photos array
const shuffledPhotos = shuffleArray(Photos);

export default function Gallery() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <MasonryPhotoAlbum
        photos={shuffledPhotos}  // Use the shuffled array
        columns={3} // Number of columns in the layout
        spacing={10} // Spacing between images
      />
    </div>
  );
}
