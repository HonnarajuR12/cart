import * as React from 'react';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigation parameters
export type RootStackParamList = {
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthorizedRoutes = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerBackVisible: false, headerTitle: 'Cart' }}
            />
        </Stack.Navigator>
    );
};

export default AuthorizedRoutes;
