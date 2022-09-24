import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, FlatList, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default function App() {
const [input, setInput] = useState("")
const [recipies, setRecipies] = useState([])

  const getRecipies = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
  const json = await response.json();
   setRecipies(json)
  }


const handleChange = (input) => {
  setInput(input)
}


console.log("Recipies", recipies)
console.log("input", input)



  return (
    <View style={styles.container}>
      <FlatList style = {styles.list} data = {recipies.meals} renderItem = {({item}) => {
        return (
        <><Text>{item.strMeal}</Text>    
        <Image style = {styles.image} source={{uri: item.strMealThumb}}/>  
        </>
        )
      }}/>
          <KeyboardAwareScrollView>
      <TextInput style={styles.input} value = {input} onChangeText = {handleChange}/>    
      <Pressable style={styles.button} onPress={getRecipies}><Text style={styles.text}>Search</Text></Pressable>
    <StatusBar style="auto" />
    </KeyboardAwareScrollView>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50
  },
  list: {
    padding: 5,
    width: "auto",
    height: 500,
    color: "black",
  },
  image: {
    width: 300,
    height: 200
  },
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black"
  },
  text:{
    color:'white'
  }
});
