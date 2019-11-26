import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuoteScreen from "./components/QuoteScreen";

const MainNavigator = createStackNavigator({
  Home: { screen: QuoteScreen }
});
const App = createAppContainer(MainNavigator);
export default App;
