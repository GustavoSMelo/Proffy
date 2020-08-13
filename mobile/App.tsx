import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Routes from './src/routes/stack.routes'

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar backgroundColor={'#7159ac'} style={"light"} />
    </>
  )
}
