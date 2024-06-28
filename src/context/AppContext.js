import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [unlockedHomeIds, setUnlockedHomeIds] = useState([]);

  const unlockHome = (homeId, isNearby) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // const success = isNearby
        if (isNearby) {
          setUnlockedHomeIds(prevIds => [...prevIds, homeId]);
          resolve('Home unlocked successfully');
        } else {
          reject('Failed to unlock home');
        }
      }, 2000); // Simulate a 2-second network delay
    });
  };

  const isHomeUnlocked = (homeId) => {
    return unlockedHomeIds.includes(homeId);
  };

  const getUnlockedHomes = (homesData) => {
    return homesData.filter(home => isHomeUnlocked(home.id));
  };

  return (
    <AppContext.Provider value={{ unlockHome, isHomeUnlocked, getUnlockedHomes }}>
      {children}
    </AppContext.Provider>
  );
};
