import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default props => {
  return (
    <View style={styles.block}>
      <Text>Digite o preço da Gasolina</Text>
      <TextInput 
      style={styles.txt} 
      keyboardType="numeric"
      onChangeText={text => props.aoModificar(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 10
  },
  txt:{
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  }
});


