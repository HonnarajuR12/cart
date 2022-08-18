import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthorizedRoutes from './src/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthorizedRoutes />
    </NavigationContainer>
  );
};

export default App;
