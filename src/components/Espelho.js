import React, {useContext} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {ContadorContext} from '../context/ContadorContext';

const Espelho = () => {
  const {count, setCount} = useContext(ContadorContext);

  const aumentar = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Text
        style={{
          fontSize: 24,
        }}>
        Contador: {count}
      </Text>

      <TouchableOpacity
        style={{
          width: 140,
          height: 80,
          backgroundColor: 'green',
        }}
        onPress={aumentar}>
        <Text
          style={{
            fontSize: 24,
          }}>
          Aumentar
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Espelho;
