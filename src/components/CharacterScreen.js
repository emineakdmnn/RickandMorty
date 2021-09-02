import React, { useState, useEffect } from "react"
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  List,
  TouchableOpacity,
  FlatList
} from "react-native"

export default function CharacterScreen({ route, navigation }) {
  const { character } = route.params

  return (
    <View style={styles.container}>
      <Image style={styles.imageChar} source={{ uri: character.image }} />
      <Text>Name : {character.name}</Text>
      <Text>Status : {character.status}</Text>
      <Text>Species : {character.species}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageChar: {
    position: "relative",
    width: 300,
    height: 300,
    borderWidth: 1,
    borderRadius: 150,
    padding: 100
  }
})