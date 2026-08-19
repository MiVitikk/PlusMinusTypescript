import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  
  const [answer, setAnswer] = useState<number | null>( null );
  
  const add = () => {
    setAnswer(parseFloat(num1) + parseFloat(num2))
    clearInputs()
    
  }

  const minus = () => {
    setAnswer(parseFloat(num1) - parseFloat(num2))
    clearInputs()
  }

  const clearInputs = () => {
    setNum1('')
    setNum2('')
  } 

  return (
    <View style={styles.container}>

      <Text style={styles.answer}>Result: {answer}</Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'column' }}>
        <TextInput
          style={styles.input}
          onChangeText={num1 => (setNum1(num1))}
          value={num1}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          onChangeText={num2 => (setNum2(num2))}
          value={num2}
          keyboardType='numeric'
        />


      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-around', gap: '20'
      }}>
        <Button onPress={add} title="+" />
        <Button onPress={minus} title="-" />
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100
  },

  answer: {
    fontWeight: 'bold'
  }
});
