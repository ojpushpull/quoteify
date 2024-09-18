import AsyncStorage from '@react-native-community/async-storage';


let STORAGE_KEY = '@user_input';

const App = () => {
    const [input,setInput] = useState('');
};

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
useEffect(() => {
    readData();
  }, []);
export default App;

