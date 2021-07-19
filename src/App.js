import './App.css';
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: 'img/1.jpg',
    thumbnail: 'img/1.jpg',
    description: 'desc1',
  },
  {
    original: 'img/2.jpg',
    thumbnail: 'img/2.jpg',
    description: 'desc12',
  },
  {
    original: 'img/3.jpg',
    thumbnail: 'img/3.jpg',
    description: 'desc123',
  },
  {
    original: 'img/4.jpg',
    thumbnail: 'img/4.jpg',
    description: 'desc1234',
  },
  {
    original: 'img/5.jpg',
    thumbnail: 'img/5.jpg',
    description: 'desc12345',
  },
];

function App() {
  return <ImageGallery items={images} />;
}

export default App;
