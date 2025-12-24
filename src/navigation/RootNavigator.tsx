// src/navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Store
import { useSelector } from 'react-redux';
import { RootState } from '../store'
// Navigator
import { AuthNavigator } from './AuthNavigator'
import { MainNavigator } from './MainNavigator'
// type
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    isAuthenticated ?
                        (<Stack.Screen name="Main" component={MainNavigator} />)
                        :
                        (<Stack.Screen name="Auth" component={AuthNavigator} />)
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}