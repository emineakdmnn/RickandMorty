import React, { useState, useEffect } from "react"
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import CharacterScreen from "./src/components/CharacterScreen"
import CharactersScreen from "./src/components/CharactersScreen"
import EpisodesScreen from "./src/components/EpisodesScreen"
import EpisodeScreen from "./src/components/EpisodeScreen"



import HomeScreen from "./src/components/HomeScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="Episodes"
          component={EpisodesScreen}
          options={{
            title: "Episodes",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="Episode"
          component={EpisodeScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={{
            title: "Characters",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="Character"
          component={CharacterScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})