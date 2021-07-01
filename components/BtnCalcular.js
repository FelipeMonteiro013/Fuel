import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default props => {
  return (
    <View style={styles.block}>
      <TouchableHighlight style={styles.btn} onPress={props.aoPressionar}>
        <Text style={styles.txt}>calcular</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 10
  },
  btn: {
    backgroundColor: '#F2A216',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  txt: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold'

  }
});


