import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

export default function Dynamic() {
  const [places, setPlaces] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '', description: '' });
  const param = useParams();
  const id = param.id;

  const fetchbyCategory = async (cat_id) => {
    const place = await fetch(`http://localhost:3004/placebycategory/${id}`);
    const result = await place.json();
    setPlaces(result);
  };

  useEffect(() => {
    fetchbyCategory();
  }, [id]);

  const handleImageClick = (image, description) => {
    setModalContent({ image, description });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
        {places.map((place, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <h5>{place.place_name}</h5>
            <img
              src={place.image_id}
              alt={place.place_name}
              style={{ height: '200px', width: '300px', cursor: 'pointer' }}
              onClick={() => handleImageClick(place.image_id, place.description_id)}
            />
          </div>
        ))}
      </div>

      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        image={modalContent.image}
        description={modalContent.description}
      />
    </>
  );
}
