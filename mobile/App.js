import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Routes from './src/routes'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes/>
    </GestureHandlerRootView>
  );
}
