import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View, ViewStyle } from 'react-native';

import Cadastrar from './src/screens/Cadastrar/Cadastrar';
import EditChat from './src/screens/EditChat/EditChat';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import User from './src/screens/User/User';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerBlurEffect: 'light',
  headerStyle: {
    backgroundColor: '#05161A',
  },
  headerTintColor: '#9CE5C9',
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={({ navigation }) => ({
            title: 'Easy Tech',
            headerRight: () => (
              <View style={{ marginRight: 15 } as ViewStyle}>
                <Button
                  title='Entrar'
                  onPress={() => navigation.push('Login')}
                  color='transparent'
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#131519',
              shadowColor: 'transparent',
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name='Cadastrar'
          component={Cadastrar}
          options={{
            title: 'Cadastrar',
            headerStyle: {
              backgroundColor: '#131519',
              shadowColor: 'transparent',
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name='User'
          component={User}
          options={{
            title: 'User',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='EditChat'
          component={EditChat}
          options={{
            title: 'Edição de Chats',
            headerStyle: {
              backgroundColor: '#131519',
              shadowColor: 'transparent',
              elevation: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
