import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../views/Landing'
import GiveClasses from '../views/GiveClasses'
import TabsRoutes from './tabs.routes'

const Stack = createStackNavigator()

const StackRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name='Landing' component={Landing} />
      <Stack.Screen name='GiveClasses' component={GiveClasses} />
      <Stack.Screen name='TabsRoutes' component={TabsRoutes} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default StackRoutes
