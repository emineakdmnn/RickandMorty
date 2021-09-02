import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    
      <Button
        title="Episodes"
        onPress={() => {
          navigation.navigate("Episodes")
        }}
      />
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
    paddingTop: 1
  }
})