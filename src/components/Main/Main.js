import './Main.scss';
import { useState } from 'react';
import ImageCarousel from './components/ImageCarousel';
import Meta from './components/Meta';

const Main = ({ data }) => {
  const [currentMattressIndex, setCurrentMattressIndex] = useState(0);
  const mattresses = Object.entries(data.mattresses).map(([key, value]) => ({
    ...value,
    key,
  }));

  return (
    <main id='main'>
      <div className='carousel-container'>
        <ImageCarousel
          mattresses={mattresses}
          currentMattressIndex={currentMattressIndex}
        />
      </div>
      <div className='meta-container'>
        <Meta
          mattresses={mattresses}
          currentMattressIndex={currentMattressIndex}
          setCurrentMattressIndex={setCurrentMattressIndex}
        />
      </div>
    </main>
  );
};

export default Main;
