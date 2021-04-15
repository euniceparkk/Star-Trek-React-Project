import { createContext, useState, useContext } from 'react';
import { initialCards } from '../mockdata/CardData';

export const AppContext = createContext();
export const useDeck = () => useContext(AppContext);

export default function DeckProvider(children) {
  const [cards, setCards] = useState(initialCards);

  return (
    <AppContext.Provider
      value={{
        cards: initialCards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

