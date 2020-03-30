import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()


import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

// No lugar do browser circundando, quem circunda as rotas é o NavigationContainer
export default function routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents}/> 
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

{/* Componente que vai por volta das rotas*/}
{/* a propriedade componente identifica o componente a ser utilizado na screen*/}