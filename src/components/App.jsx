import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImg } from './service/api';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import Loader from './Loader';
import PropTypes from 'prop-types';

export function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e, value) => {
    e.preventDefault();

    if (value.trim() === '') {
      return;
    }

    setSearch(value);
    setPage(1);
    setAllImages([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetchImg(search, page);
        setAllImages((prevImages) => [...prevImages, ...res.hits]);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (page === 1) {
      setAllImages([]);
      fetchData();
    } else {
      fetchData();
    }
  }, [page, search]);

  const isAllImages = allImages.length;
  const imagesPerPage = 12;
  const maxImages = page * imagesPerPage;

  return (
    <div>
      <header>
        <Searchbar onSubmitForm={handleSubmit} />
        {search && (
          <>
            <ImageGallery items={allImages} />
            {isLoading && <Loader />}
            {isAllImages > 0 && isAllImages >= maxImages && (
              <Button handleButtonClick={loadMore} images={allImages} />
            )}
          </>
        )}
      </header>
    </div>
  );
}

App.propTypes = {
  search: PropTypes.string,
  page: PropTypes.number,
  allImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};

export default App;