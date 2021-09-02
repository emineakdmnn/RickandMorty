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


async function getEpisodes(page) {
    const url = "https://rickandmortyapi.com/api/episode"
    
    const episodes = await fetch(url)
      .then(resp => resp.json())
      .then(function(data) {
        return data.results
      })
    return episodes
  }

  export default function EpisodesScreen({ navigation }) {
    const [episodes, setEpisodes] = useState([])
    const [page, setPage] = useState(1)
  
    useEffect(() => {
      async function fetchData() {
        const episodes = await getEpisodes()
        setEpisodes(episodes)
      }
      fetchData()
    }, [page])
  
    return (
      <View style={styles.container}>
        <FlatList
          data={episodes}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Characters", {
                    episode: item
                  })
                }}
              >
                <Image
                  style={styles.imageGrid}
                  source={{uri: 'https://reactjs.org/logo-og.png'}}
                />
                <Text>
                 {item.name}
                </Text>
               
              </TouchableOpacity>
            </View>
          )}
          numColumns={4}
          keyExtractor={(item, index) => index}
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
    },
  
    imageGrid: {
      justifyContent: "center",
      alignItems: "center",
      height: 126.3
    }
    
  })