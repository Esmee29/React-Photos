import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';
import { Link } from 'react-router-dom';

const featuredImages = [
  { src: '/src/assets/Photos/000063631234.jpg', alt: 'Mountain', orientation: 'landscape', description: 'Mountain, Thassos Greece, Shot on Google Pixel 7a' },
  { src: '/src/assets/Photos/000016350021.jpg', alt: 'White Building', orientation: 'portrait', description: 'White Building, Nottingham, Shot on Olympus Superzoom 700BF on Kodak Gold' },
  { src: '/src/assets/Photos/000061820021.jpg', alt: 'Fishing Equipment', orientation: 'landscape', description: 'Fishing Equipment, Limenaria, Thassos, Shot on Kodak Gold 200 on Canon sure shot af-7.'},
  { src: '/src/assets/Photos/000016360031.jpg', alt: 'Windmill', orientation: 'portrait', description: 'Windmill, Nottingham, Ilford HP5 Plus, on Canon sure shot af-7' },
  { src: '/src/assets/Photos/000061820036.jpg', alt: 'Sunset', orientation: 'landscape', description: 'Thassos Greece, Kodak Gold 200 on Canon sure shot af-7' },
  { src: '/src/assets/Photos/000063630010.jpg', alt: 'Abbey Gardens', orientation: 'portrait', description: 'Abbey Gardens, Bury St Edmunds, Fujifilm C200 Canon sure shot af-7' },
  { src: '/src/assets/Photos/000063640021.jpg', alt: 'Cromer Pier', orientation: 'landscape', description: 'Cromer Pier, Kodak Gold on Canon sure shot max' },
  { src: '/src/assets/Photos/000088260027.jpg', alt: 'Wollaton Hall', orientation: 'portrait', description: 'Wollaton Hall and Deer Park, Nottingham, Kodak Gold 200 on Olympus om10' },
  { src: '/src/assets/Photos/000063630234.JPG', alt: 'Tree', orientation: 'landscape', description: 'Tree, Nikon D3300' },
];

const HomePage = () => {
  return (
    <div className="home-page">
    <h1 className="text-center text-4xl font-bold mb-8">Welcome to My Photography Portfolio</h1>
    <Link to="/gallery" className="gallery-link">View Gallery</Link>
    <Carousel 
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      interval={5000}
      showStatus={false} /* Remove the "5 of 5" status */
    >
      {featuredImages.map((image, index) => (
        <div key={index} className="carousel-image-container">
          <img
            src={image.src}
            alt={image.alt}
            className={`carousel-image ${image.orientation === 'landscape' ? 'landscape' : ''}`}
          />
          <div className="carousel-description">
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
  );
}

export default HomePage;
