import AsyncStorage from '@react-native-community/async-storage';


let STORAGE_KEY = '@user_input';

const Storaging = () => {
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

 
  };
export default Storaging;

