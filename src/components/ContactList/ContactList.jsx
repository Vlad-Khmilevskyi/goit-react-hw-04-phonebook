import React from 'react';
import css from '../Contacts.module.css';

function ContactList({ contacts, onDeleteContacts }) {
  return (
    <ul className={css.contacts_ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.list} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.button_contacts}
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
