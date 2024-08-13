import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/styles.css";

// Dynamically import all images in the Analogue folder that match the pattern
const images = import.meta.glob('/src/assets/Analogue/*.{jpg,jpeg,png}', { eager: true });

const analoguePhotos = Object.keys(images).reduce((photos, filePath) => {
  // Filter the images based on the filename prefix
  if (
    filePath.includes("Landscape-01") || 
    filePath.includes("Landscape-02") || 
    filePath.includes("Portrait-01") || 
    filePath.includes("Portrait-02")
  ) {
    let width, height;

    if (filePath.includes("Landscape")) {
      width = 1200; // Width for landscapes
      height = 800; // Height for landscapes
    } else if (filePath.includes("Portrait")) {
      width = 800;  // Width for portraits
      height = 1200; // Height for portraits
    }

    photos.push({
      src: images[filePath].default,
      width,
      height,
    });
  }

  return photos;
}, []);

export default function AnalogueGallery() {
  return (
    <MasonryPhotoAlbum
      photos={analoguePhotos}
      columns={3} // Adjust the number of columns to your preference
      spacing={10} // Adjust the spacing between images
    />
  );
}
