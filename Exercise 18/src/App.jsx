import React, { useContext, useState } from "react";
import { ContactContext } from "./ContactContext";

function App() {
  const { contacts, dispatch } = useContext(ContactContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    dispatch({
      type: "ADD_CONTACT",
      payload: form,
    });

    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  const favoriteContact = (id) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: id,
    });
  };

  return (
    <div>
      <h1>Add New Contact</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add</button>
      </form>

      <h1>Contacts</h1>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h3>{contact.name}</h3>

            <p>Email: {contact.email}</p>

            <p>Phone: {contact.phone}</p>

            <button onClick={() => favoriteContact(contact.id)}>
              {contact.favorite ? "Unfavorite" : "Favorite"}
            </button>

            <button>Edit</button>

            <button onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;