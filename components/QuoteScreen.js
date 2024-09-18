import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage, TextInput } from "react-native";

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
