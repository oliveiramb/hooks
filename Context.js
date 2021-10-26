import React from 'react';
import {View} from 'react-native';

import Contador from './src/components/Contador';
import Espelho from './src/components/Espelho';
import ContadorProvider from './src/context/ContadorContext';

const Context = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'pink',
          alignItems: 'center',
        }}>
        <ContadorProvider>
          <Contador />
          <Espelho />
        </ContadorProvider>
      </View>
    </>
  );
};

export default Context;
