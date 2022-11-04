import { useState } from 'react';
import { 
  Button,
  StyleSheet, 
  TextInput,
  View 
} from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes,setLembretes] = useState([])

  const capturarTexto = (lembreteDigitado) => {
    lembreteDigitado = lembreteDigitado.toUpperCase()
    // Não faça isso
    // capturar = lembreteDigitado
    // faça isso 
    setLembrete(lembreteDigitado)
  }
  const adicionarLembrete = () => {
    // console.log('Adicionando...', lembrete)
    setLembretes(lembretes => [lembrete, ...lembretes])
    setLembrete('')
    console.log(lembretes)
  }
  // Single source of true
  // Unica fonte de dados
  return (
    <View style={{ padding:40 }}>
      <View>
        <TextInput 
          style={{borderBottomColor: '#CCC', 
          borderBottomWidth:1, 
          padding:12, 
          marginBottom:4}}
          placeholder="Lembrar..."
          onChangeText={capturarTexto}
          value={lembrete}
        />
        <Button 
          title="OK"
          onPress={adicionarLembrete}
        />
      </View>
      <View>
        
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  
});
