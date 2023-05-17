import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import css from './Contacts.module.css';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = ({ name, number }) => {
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(3),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const contactsFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizerFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizerFilter)
    );
  };

  const deleteContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();
  const isContactsEmpty = contacts.length === 0;

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={contactsFilter} />

      {!isContactsEmpty && (
        <>
          <ContactList
            contacts={visibleContacts}
            onDeleteContacts={deleteContacts}
          />
        </>
      )}
      {isContactsEmpty && <p>There are no contacts yet</p>}
    </div>
  );
}

export default App;
