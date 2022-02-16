import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

const App = () => {
  
  function mandaProConsole(){
    console.log("sdfd");
  }

  return (
    // passando um parametro pelo componente
   <SafeAreaView >
      <Titulo texto = "Oi jonatas" style={{marginLeft: 50}}/> 

      <Button title="Faz algo" onPress={mandaProConsole} />
      <Botao label="faz algo 2" onPress={mandaProConsole} />
    </SafeAreaView>
  );
};



export default App;
