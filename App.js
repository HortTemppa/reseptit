import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
const [searchWord, setSearchWord] =  useState()
const [recipies, setRecipies] = useState([])

const getRecipies = async () => {
 const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=tomato̧https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchWord}`)
 const json = await response.json();

 console.log(json.body)
}

  return (
    <View style={styles.container}>
      <TextInput onChange={(e) => setSearchword(e.target.value)}/>    
      <Button onPress={getRecipies()}>Search</Button>
    <StatusBar style="auto" />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
