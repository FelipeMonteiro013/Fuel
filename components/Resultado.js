import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default props => {
  return (
    <View style={styles.block}>
      <Text>Melhor Combustível: {props.resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 10
  },
});


