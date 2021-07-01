import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Gasolina from './components/Gasolina';
import Etanol from './components/Etanol';
import BtnCalcular from './components/BtnCalcular';
import Resultado from './components/Resultado';
import ImgResultado from './components/ImgResultado';

export default function App() {

  const [gasolina, setGasolina]  = useState(0)
  const [etanol, setEtanol]  = useState(0)
  const [resultado, setResultado]  = useState('')

  const calcular = () => {
    if (!gasolina) {
      alert('Informe o preço da Gasolina')
      return
    }

    if (!etanol) {
      alert('Informe o preço do Etanol')
      return
    }

    let res
    let calc=((etanol/gasolina)*100).toFixed(1);

    if (calc > 70) {
      res = 'Gasolina'
    }else{
      res = 'Etanol'
    }
    alert('O Etanol esta custando ' + calc +'% da Gasolina por tanto é melhor abastecer com ' + res)
    setResultado(res)
  }

  const limpar = () => {
    setResultado('')
  }

  const setarGasolina = (v) => {
    limpar()
    setGasolina(v)
  }

  const setarEtanol = (v) => {
    limpar()
    setEtanol(v)
  }

  return (
    <SafeAreaView style={styles.main}>
      <Gasolina aoModificar={setarGasolina}/>
      <Etanol aoModificar={setarEtanol}/>
      <BtnCalcular aoPressionar={calcular}/>
      <Resultado resultado={resultado}/>
      <ImgResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10
  }
});


