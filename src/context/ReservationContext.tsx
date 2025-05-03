import React, { createContext, useState, useContext } from 'react';

interface ReservationContextType {
  isOpen: boolean;
  toggleReservationPanel: () => void;
}

const ReservationContext = createContext<ReservationContextType>({
  isOpen: false,
  toggleReservationPanel: () => {},
});

interface ReservationProviderProps {
  children: React.ReactNode;
}

export const ReservationProvider: React.FC<ReservationProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReservationPanel = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        isOpen,
        toggleReservationPanel,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => useContext(ReservationContext);