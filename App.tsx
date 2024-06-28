import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeListScreen from "./src/screens/HomeListScreen";
import HomeDetailsScreen from "./src/screens/HomeDetailScreen";
import { StyleSheet } from "react-native";
import { AppProvider } from "./src/context/AppContext";
import UnlockedHomesScreen from "./src/screens/UnlockedHomeScreen";
import GetStarted from "./src/screens/GetStarted";

function App(): React.JSX.Element {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <AppProvider>
      <Stack.Navigator initialRouteName="Get Started">
        <Stack.Screen name="Get Started" component={GetStarted} options={{headerShown:false}}/>
        <Stack.Screen name="Home List" component={HomeListScreen} />
        <Stack.Screen name="Home Details" component={HomeDetailsScreen} />
        <Stack.Screen name="Unlocked Homes" component={UnlockedHomesScreen} />
      </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
