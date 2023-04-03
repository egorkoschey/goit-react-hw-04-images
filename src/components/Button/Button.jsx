import s from './Button.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect, useCallback, useMemo } from 'react';

const Button = ({ handleButtonClick, images }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (images.length > 0 && images.length % 12 === 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [images]);

  const memoizedHandleButtonClick = useCallback(() => {
    handleButtonClick();
  }, [handleButtonClick]);

  const memoizedButton = useMemo(() => {
    return (
      <button
        type="button"
        className={s.loadmoreBtn}
        onClick={memoizedHandleButtonClick}
      >
        Load more
      </button>
    );
  }, [memoizedHandleButtonClick]);
  return <div className={s.boxBtn}>{showButton && memoizedButton}</div>;
};

Button.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default Button;