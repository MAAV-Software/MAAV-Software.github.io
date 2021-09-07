import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import './PicturesPage.css';

import {
  Card,
  ImageList,
  ImageListItem,
  Modal,
} from '@material-ui/core';

// Import media
import office_1 from '../../media/office-1.jpg';
import office_2 from '../../media/office-2.jpg';
import m_air from '../../media/m-air.jpg';
import maav_m from '../../media/maav-m.png';
import circuits from '../../media/circuits.png';
import test_drone from '../../media/test-drone.jpg';
import printing from '../../media/3d-printing.jpg';

const pictures = [
  {
    image: office_1,
    altText: 'Office Picture 1',
  },
  {
    image: office_2,
    altText: 'Office Picture 2',
  },
  {
    image: m_air,
    altText: 'M-Air Outdoor Testing Facility',
  },
  {
    image: maav_m,
    altText: 'MAAV Team Picture',
  },
  {
    image: circuits,
    altText: 'Circuits',
  },
  {
    image: test_drone,
    altText: 'Testing a Drone in FXB',
  },
  {
    image: printing,
    altText: '3D Printing Components for the Vehicle',
  },
]

export default function PicturesPage() {
  const isSmallScreenWidth = useMediaQuery({ query: '(max-width: 800px)' });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);

  const [focusedImage, setFocusedImage] = useState({
    image: null,
    altText: null,
  });

  function onImageClick(pic) {
    setFocusedImage(pic);
    setModalIsOpen(true);
  }

  return (
    <Card>
      <h2>Pictures</h2>
      <ImageList
        rowHeight={isSmallScreenWidth ? 200 : 400}
        cols={isSmallScreenWidth ? 1 : 2}
        id="gallery"
      >
        {pictures.map(pic => (
          <ImageListItem key={pic.image}>
            <img src={pic.image} alt={pic.altText} onClick={() => onImageClick(pic)} />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="image-modal"
        aria-describedby="view-full-image"
      >
        <Card className="modal-card" onClick={closeModal}>
          <img src={focusedImage.image} alt={focusedImage.altText} className="modal-image" />
        </Card>
      </Modal>
    </Card>
  );
}
