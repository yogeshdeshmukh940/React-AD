import React from 'react';

function TaskCheck() {
  const [number, setNumber] = React.useState('');
  const [contacts, setContacts] = React.useState([
    '9754520854',
    '47854785478',
    '125478545996',
  ]);

  // Handle input change
  function handleInput(e) {
    setNumber(e.target.value);
  }

  // Add number to list
  function handleSubmit() {
    if (!number.trim()) {
      alert('Please enter a valid number.');
      return;
    }

    if (contacts.includes(number)) {
      alert('Number already exists!');
    } else {
      setContacts([...contacts, number]);
      setNumber('');
    }
  }

  // Check if number exists
  function handleCheck() {
    if (contacts.includes(number)) {
      alert('Number exists in contacts.');
    } else {
      alert('Number not found.');
    }
  }

  // Delete number
  function handleDelete() {
    if (contacts.includes(number)) {
      const updatedContacts = contacts.filter((c) => c !== number);
      setContacts(updatedContacts);
      alert('Number deleted.');
    } else {
      alert('Number not found.');
    }
    setNumber('');
  }

  return (
    <>
      <input
        className="border px-2 py-0.5"
        type="text"
        value={number}
        onChange={handleInput}
        placeholder="Enter phone number"
      />
      <button className="border rounded px-2 mr-1" onClick={handleSubmit}>
        Submit
      </button>
      <button className="border rounded px-2 mr-1" onClick={handleCheck}>
        Check
      </button>
      <button className="border rounded px-2 mr-1" onClick={handleDelete}>
        Delete
      </button>

      <ul className="mt-3">
        {contacts.map((contact, index) => (
          <li key={index} className="my-1">
            {contact}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskCheck;
