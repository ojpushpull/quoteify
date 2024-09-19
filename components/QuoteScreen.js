import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage, TextInput, TouchableOpacity } from "react-native";



export default class QuoteScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quote: ""
    };
  }
 
  


  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30
      },
      alignRight: {
        textAlign: "right"
      }
    });

    return (
      <View style={styles.container}>

<Text style={styles.label}>Enter your input here:</Text>
        
        <TextInput
          style={styles.inputField}
          value={input}
          placeholder="Enter"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={styles.text}>Your input is {input}</Text>
        <Pressable onPress={clearStorage} style={styles.button}>
          <Text style={styles.buttonText}>Clear Storage</Text>
        </Pressable>
        <Text>{this.state.quote.content}</Text>
        <Text style={styles.alignRight}>
          {this.state.quote.author ? " - " + this.state.quote.author : ""}
        </Text>
      </View>
    );
  }

  componentDidMount() {
 
    this.fetchQuote().then(response => {
      this.setState({ quote: response });
    });
  }



  fetchQuote = async () => {
    try {
      let response = await fetch("https://api.quotable.io/random");
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };
}


let STORAGE_KEY = '@user_input';

  const [input,setInput] = useState('');


const saveData = async () => {
  try {
      awaitAsyncStorage.setItem(STORAGE_KEY, age)
      alert('Data successfully saved')
  } catch (e) {
      alert ('Failed to save data')
  }

const readData = async () => {
  try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);

      if (value !== null) {
          setInput(value);
      }
  } catch (e) {
      alert ('failed to fetch the input from storage')
  }
}
}

const clearStorage = async () => {
  try {
      await AsyncStorage.clear();
      alert('Storage succesffully cleared');
  } catch (e) {
      alert('Failed to clear the async storage');
  }
};

const onChangeText = value => setInput(value);

const onSubmitEditing = () => {
  if (!input) return;
  
  saveData(input);
  setInput('');
};
useEffect(() => {
  readData();
}, []);




