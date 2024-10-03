import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface ContactModalContextProps {
  isModalOpened: boolean;
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const ContactModalContext = React.createContext<ContactModalContextProps | null>(null);

export function ContactModalContextProvider<T>({ children }: PropsWithChildren<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <ContactModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModalContext() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModalContext can only be used inside ContactModalContextProvider');
  }
  return context;
}