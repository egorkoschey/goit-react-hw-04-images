import { MutatingDots } from 'react-loader-spinner';
import { useMemo } from 'react';
import s from './Loader.module.css';

const Loader = () => {
  const loaderStyles = useMemo(() => ({ height: 100, width: 100, radius: 12.5 }), []);

  return (
    <MutatingDots
      color="rgb(239, 147, 147)"
      secondaryColor="blueviolet"
      ariaLabel="mutating-dots-loading"
      visible={true}
      style={loaderStyles}
      className={s.loader}
    />
  );
};

export default Loader;