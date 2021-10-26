import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
export const ContadorContext = createContext();

const ContadorProvider = ({children}) => {
  const [count, setCount] = useState(0);

  const mensagem = mensagem => {
    Alert.alert(`o botao foi clicao pelo ${mensagem}`);
  };

  return (
    <ContadorContext.Provider value={{count, setCount, mensagem}}>
      {children}
    </ContadorContext.Provider>
  );
};

export default ContadorProvider;
