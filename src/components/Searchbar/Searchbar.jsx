import React, { useState } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

function Searchbar({ onSubmitForm }) {
  const [value, setValue] = useState('');

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(e, value);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <button type="submit" className={s.form_btn}>
        <span>Search</span>
      </button>

      <input
        className={s.form_input}
        type="text"
        autoComplete="off"
        placeholder="Search images and photos"
        value={value}
        onChange={handleChangeInput}
      />
    </form>
  );
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
