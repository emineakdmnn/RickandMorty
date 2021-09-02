import React, { useState, useEffect } from "react"
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Linking
} from "react-native"
import { Link } from '@react-navigation/native';
import CharacterScreen from "./CharacterScreen"
import CharactersScreen from "./CharactersScreen"
import axios from 'axios';


export default function EpisodeScreen({ route, navigation }) {
  const { episode } = route.params

 
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  
  imageGrid: {
    justifyContent: "center",
    alignItems: "center",
    height: 126.3
  }
})