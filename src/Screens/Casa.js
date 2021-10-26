import React from "react";

import {View, TouchableOpacity, Text} from "react-native"

const Casa = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={
          () => {
          navigation.navigate("home")}
        }>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Casa;