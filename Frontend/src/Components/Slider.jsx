import React, { useState } from 'react';
import Modal from './Modal';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: '',
    title: '',
    description: '',
  });

  const handleReadMoreClick = (image, title, description) => {
    setModalContent({ image, title, description });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const sidebarItems = [
    {
      image: 'rathayatra2.jpg',
      title: 'Rathayatra',
      description: 'Rath Yatra is an annual Hindu festival in Puri, featuring chariot processions of deities Jagannath, Balabhadra, and Subhadra...',
    },
    {
      image: 'laxmi puja.jpg',
      title: 'Laxmi Puja',
      description: 'Laxmi Puja is a Hindu ritual honoring Goddess Laxmi, performed for prosperity and wealth, especially during Diwali celebrations...',
    },
    {
      image: 'pakhala-bhata-1.jpg',
      title: 'Pakhala Divas',
      description: 'Pakhala Divas, celebrated in Odisha, honors the traditional dish pakhala, a fermented rice meal enjoyed to beat the summer heat...',
    },
    {
      image: 'raja parba.jpeg',
      title: 'Raja Parba',
      description: 'Raja Parba, an Odisha festival, celebrates womanhood and the earth\'s fertility with swings, traditional games, and festive food over three days....',
    },
    {
      image: 'odishi.jpg',
      title: 'Odishi Nrutya',
      description: 'Odissi Nrutya, a classical dance form from Odisha, is known for its expressive movements, intricate footwork, and storytelling through graceful gestures...',
    },
    {
      image: 'holi.webp',
      title: 'Holi',
      description: 'Holi, the Festival of Colors, is a vibrant Hindu celebration where people joyfully throw colored powders, dance, and celebrate the arrival of spring..',
    },
    {
      image: 'durga puja.jpg',
      title: 'Durga Puja',
      description: 'Durga Puja is a major Hindu festival honoring Goddess Durga, featuring elaborate rituals, vibrant pandals , cultural performances, and community gatherings..',
    },
    {
      image: 'diwali.jpg',
      title: 'Diwali',
      description: 'Diwali, known as the Festival of Lights, is a Hindu festival celebrated with lamps, fireworks, sweets, and prayers to signify the victory of light over darkness..',
    },
    {
      image: 'raksha bandhan.jpg',
      title: 'Raksha Bandhan',
      description: "Raksha Bandhan is a Hindu festival celebrating the bond between brothers and sisters, marked by sisters tying rakhi threads on their brothers' wrists...",
    },
    {
      image: 'boita.jpeg',
      title: 'Boita Vasani',
      description: 'Boita Bhasani commemorates the ancient maritime tradition where boats are floated in rivers or ponds to honor past voyages and trade..',
    },
    {
      image: 'sambal puri.png',
      title: 'Sambalpuri Dance',
      description: "Sambalpuri dance is a vibrant folk dance from Odisha, known for its energetic movements and colorful costumes celebrating the region's cultural heritage..",
    },
    {
      image: 'Ganesh-Chathurthi.jpg',
      title: 'Ganesh Chaturthi',
      description: 'Ganesh Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha with prayers, elaborate decorations, and the immersion of clay idols in water bodies..',
    },
  ];

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
        description={modalContent.description}
      />
      <div className="slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {sidebarItems.map((card, index) => (
          <div className="slide-card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <button
              onClick={() => handleReadMoreClick(card.image, card.title, card.description)}
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
