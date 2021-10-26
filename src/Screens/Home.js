import React from "react";

import {View, TouchableOpacity, Text} from "react-native"

const Home = ({ navigation }) => {
  return (
    <View style={{flex: 1, alignItens: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={
          () => {
          navigation.navigate("casa")}
        } style={{ backgroundColor: 'black', alignItems: 'center', padding: 20, margin: 10}}>
        <Text style={{color: 'white'}}>Casa</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;