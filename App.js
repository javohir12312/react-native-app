import React from 'react';
import { StyleSheet } from 'react-native';
import Footer from './components/Footer/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import Profil from './components/Profil/Profil';
import Info from './components/Info/Info';
import { Input } from './components/Input/Input';
import Output from './components/Output/Output';
import store from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <>
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }}
          />
          <Stack.Screen navigationKey='Profile' name="Profile" component={Profil} />
          <Stack.Screen navigationKey='Info' name="Info" component={Info} />
          <Stack.Screen navigationKey='Input' name="Input" component={Input} />
          <Stack.Screen navigationKey='Output' name="Output" component={Output} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
