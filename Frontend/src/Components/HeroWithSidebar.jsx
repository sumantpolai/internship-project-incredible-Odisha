import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroWithSidebar.css';
import Modal from './Modal';

function HeroWithSidebar() {
  const [selectedImage, setSelectedImage] = useState("https://travels.digicomposite.com/wp-content/uploads/2020/06/Untitled-1.jpg");
  const [sidebarItems, setSidebars] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: '',
    title: '',
    description: '',
  });
  const [selectedText, setSelectedText] = useState({
    title: 'Jagannath Temple',
    description: 'The Jagannath Temple in Puri, Odisha, is one of the most famous Hindu temples in India, dedicated to Lord Jagannath, a form of Lord Vishnu....'
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
    const result = await fetch(`http://localhost:3004/popular_place`);
    const data = await result.json();
    const newdata = getRandomElements(data, 15);
    setSidebars(newdata);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <div className='popular-part'>
        <div className='popular-h'>
          <h1 className='popular-'>Popular In Odisha</h1>
          <h4 className='popular-pa'> Odisha is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve </h4>
        </div>
      </div>
      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        image={modalContent.image}
        title={modalContent.title}
        description={modalContent.description}
      />
      <div className="hero-sidebar-container">
        <div className="hero-main">
          <img src={selectedImage} alt={selectedText.title} className="hero-image" />
          <div className="hero-text-overlay">
            <h1>{selectedText.title}</h1>
            <p>{selectedText.description}</p>
            <a href="/" className="hero-read-more">Read More</a>
          </div>
        </div>
        <div className="sidebar">
          {sidebarItems.map((item, index) => (
            <div className="sidebar-item" key={index}>
              <img src={item.image_id} alt={item.place_name} className="sidebar-image" />
              <div className="sidebar-text">
                <h2>{item.place_name}</h2>
                <button
                  onClick={() => handleReadMoreClick(item.image_id, { title: item.place_name }, item.description_id)}
                  className="sidebar-read-more"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroWithSidebar;
