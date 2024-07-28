import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarItems, setSidebars] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: '',
    title: '',
    description: '', // Add description here
  });

  const handleReadMoreClick = (image, text, description) => {
    setModalContent({ image, title: text.title, description });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  function getRandomElements(arr, numElements) {
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, numElements);
  }

  const dataFetch = async () => {
    try {
      const result = await fetch(`http://localhost:3004/popular_place`);
      const data = await result.json();
      const newdata = getRandomElements(data, 15);
      setSidebars(newdata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const prevSlide = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : sidebarItems.length - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex < sidebarItems.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        image={modalContent.image}
        title={modalContent.title}
        description={modalContent.description} // Pass description to Modal
      />

      <div className="slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {sidebarItems.map((card, index) => (
          <div className="slide-card" key={index}>
            <img src={card.image_id} alt={card.place_name} />
            <h3>{card.place_name}</h3>
            <button
              onClick={() => handleReadMoreClick(card.image_id, { title: card.place_name }, card.description_id)}
              className="sidebar-read-more"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
      {/* <button className="nav-btn prev-btn" onClick={prevSlide}>&#10094;</button> */}
      {/* <button className="nav-btn next-btn" onClick={nextSlide}>&#10095;</button> */}
    </div>
  );
};

export default Slider;
