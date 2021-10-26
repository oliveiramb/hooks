import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Botoes from './src/Botoes';

const App = () => {
  return (
      <View style={styles.container}>
        <Botoes nomeBotao="BotaoTeste" evento={() => {console.log("Teste1")}}/>
        <Botoes nomeBotao="BotaoTeste2"/>
        <Botoes nomeBotao="BotaoTeste3"/>
        <Botoes nomeBotao="BotaoTeste4"/>
      </View>
  );
};

// yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack

// https://reactnavigation.org/docs/getting-started

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row"
  }
});

export default App;
