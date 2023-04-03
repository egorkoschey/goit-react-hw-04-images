import Modal from 'components/Modal';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ImageGalleryItem = ({ item, largeImg, ...otherProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={s.listItem}>
        <img
          className={s.itemImage}
          src={item}
          onClick={handleModalOpen}
          alt=""
          loading="lazy"
        />
        {isModalOpen && (
          <Modal image={largeImg} closeModal={handleModalClose} {...otherProps} />
        )}
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;