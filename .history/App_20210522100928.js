import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

  const App = () => {

    let [name, SetName] = useState( '' )
    let [submit, SetSubmit] = useState( false ) 
    let onClickHandler = () => {
      SetSubmit( !submit )
    }

    return (
      <View style={ styles.body }>
        <Text style={ styles.text }>Enter your name: </Text>
        <TextInput
          
          style={ styles.input }
          placeholder='e.g. John'
          onChangeText={ ( value ) => SetName( value ) }
        />
        <Button
          onPress={ onClickHandler }
          title='Submit'/>
        {  }
        
      </View>
    );
  }
   
  export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    margin: 10,
    color: "#000000",
    fontSize: 20,
    fontStyle: "italic",
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
