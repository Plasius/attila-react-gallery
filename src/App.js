import './App.css';
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: 'img/1.jpg',
    thumbnail: 'img/1.jpg',
    description: 'Damn! Alright my boy',
  },
  {
    original: 'img/2.jpg',
    thumbnail: 'img/2.jpg',
    description: 'Damn! Alright my boy',
  },
  {
    original: 'img/3.jpg',
    thumbnail: 'img/3.jpg',
    description: 'Damn! Alright my boy',
  },
  {
    original: 'img/4.jpg',
    thumbnail: 'img/4.jpg',
    description: 'Damn! Alright my boy',
  },
];

function App() {
  return <ImageGallery items={images} />;
}

export default App;
