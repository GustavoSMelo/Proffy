import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Proffys from '../views/Proffys'
import Favorites from '../views/Favorites'

const Tabs = createBottomTabNavigator()

const TabsRoutes = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Proffys' component={Proffys} />
      <Tabs.Screen name='Favorites' component={Favorites} />
    </Tabs.Navigator>
  )
}

export default TabsRoutes
