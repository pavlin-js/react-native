
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [items, setItems] = useState( 'Style Test' )
  let onClickHandler = () => {
    setName( 'set name is done' )
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.text }>{ name }</Text>
      <View style={styles.button} >
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    maxHeight: 800,
    flex: 1,
    backgroundColor: 'darkkhaki',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'aqua',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'lowercase'
  },
  button: {
    width: 200,
  }
});