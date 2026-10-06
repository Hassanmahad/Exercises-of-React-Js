import React, { createContext, useReducer } from "react";

export const ContactContext = createContext();

const initialState = [];

const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          id: Date.now(),
          ...action.payload,
          favorite: false,
        },
      ];

    case "DELETE_CONTACT":
      return state.filter(
        (contact) => contact.id !== action.payload
      );

    case "TOGGLE_FAVORITE":
      return state.map((contact) =>
        contact.id === action.payload
          ? {
              ...contact,
              favorite: !contact.favorite,
            }
          : contact
      );

    default:
      return state;
  }
};

export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(
    contactReducer,
    initialState
  );

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};