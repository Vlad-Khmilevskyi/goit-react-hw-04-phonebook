import React from 'react';
import css from '../Contacts.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={css.filter}>
      <form>
        <p className={css.input_title}>Find contacts by name</p>
        <br />
        <input type="text" value={value} onChange={onChange} />
      </form>
    </div>
  );
}

export default Filter;
