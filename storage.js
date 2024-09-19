import AsyncStorage from '@react-native-community/async-storage';


let STORAGE_KEY = '@user_input';

const App = () => {
    const [input,setInput] = useState('');


const saveData = async () => {
    try {
        awaitAsyncStorage.setItem(STORAGE_KEY, age)
        alert('Data successfully saved')
    } catch (e) {
        alert ('Failed to save data')
    }

const readData = async () => {
    try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);

        if (value !== null) {
            setInput(value);
        }
    } catch (e) {
        alert ('failed to fetch the input from storage')
    }
  }
}

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        alert('Storage succesffully cleared');
    } catch (e) {
        alert('Failed to clear the async storage');
    }
};

const onChangeText = value => setInput(value);
const onSubmitEditing = () => {
    if (!input) return;
    
    saveData(input);
    setInput('');
};
useEffect(() => {
    readData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AsyncStorage React Native</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.label}>Enter your input here:</Text>
        <TextInput
          style={styles.inputField}
          value={input}
          placeholder="Enter"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={styles.text}>Your input is {input}</Text>
        <Pressable onPress={clearStorage} style={styles.button}>
          <Text style={styles.buttonText}>Clear Storage</Text>
        </Pressable>
      </View>
    </View>
  );
  };
export default App;

