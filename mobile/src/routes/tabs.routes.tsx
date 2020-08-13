import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Proffys from '../views/Proffys'
import Favorites from '../views/Favorites'

const Tabs = createBottomTabNavigator()

const TabsRoutes = () => {
  return (
    <Tabs.Navigator tabBarOptions={{
      activeBackgroundColor: '#7159ac',
      activeTintColor: '#fff',
      inactiveTintColor: '#000',
      labelStyle: { fontSize: 16, fontWeight: "bold" }
    }}>
      <Tabs.Screen options={{
        tabBarIcon: ({ color, size, focused }) => {
          return <Ionicons name='ios-easel' size={size} color={focused ? '#fff' : '#000'} />
        }
      }} name='Proffys' component={Proffys} />
      <Tabs.Screen options={{
        tabBarIcon: ({ color, size, focused }) => {
          return <Ionicons name='ios-heart' size={size} color={focused ? '#fff' : '#000'} />
        }
      }} name='Favorites' component={Favorites} />
    </Tabs.Navigator>
  )
}

export default TabsRoutes
