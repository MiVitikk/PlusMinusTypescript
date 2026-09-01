import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const add = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    let result
    result = n1 + n2
    setAnswer(result.toString())
    clearInputs()
    setHistory(prev => [...prev, `${num1} + ${num2} = ${result}`]);
  }

  const minus = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    let result
    result = n1 - n2
    setAnswer(result.toString())
    clearInputs()
    setHistory(prev => [...prev, `${num1} - ${num2} = ${result}`]);
  }

  const clearInputs = () => {
    setNum1('')
    setNum2('')
  } 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
      <FlatList
        data={history}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />

    
    </SafeAreaView>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50

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