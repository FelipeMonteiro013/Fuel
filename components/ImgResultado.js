import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default props => {
  return (
    <View style={styles.block}>
      {
        props.comb === '' ? (
          <Image
            style={styles.image}
            source={require('../assets/Bomba.png')}
          />
        ) :
         props.comb === 'G' ? (
          <Image
            style={styles.image}
            source={require('../assets/BombaGasolina.png')}
          />
        ):
        (<Image
          style={styles.image}
          source={require('../assets/BombaEtanol.png')}
        />)
      }

    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 260,
    resizeMode: 'stretch'
  }
});


