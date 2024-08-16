import { useState, useEffect } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/styles.css';
import './Gallery.css';

// Dynamically import all images
const images = import.meta.glob('/src/assets/Photos/*.{jpg,jpeg,png}', { eager: true });

const Photos = Object.keys(images).map(filePath => {
  const img = new Image();
  img.src = images[filePath].default;
  
  // Ensure dimensions are set
  img.onload = () => {
    // Handle loaded images if needed
  };

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
  const [columns, setColumns] = useState(getColumns());

  function getColumns() {
    if (window.innerWidth < 768) {
      return 2; // Fewer columns for mobile screens
    }
    return 3; // Default number of columns
  }

  useEffect(() => {
    function handleResize() {
      setColumns(getColumns());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="gallery-container p-4 max-w-screen-xl mx-auto">
      <MasonryPhotoAlbum
        photos={shuffledPhotos}
        columns={columns} // Use dynamic columns based on screen size
        spacing={10}
      />
    </div>
  );
}
