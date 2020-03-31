import React from 'react'
import { ScrollView, View, ImageBackground, Text } from 'react-native'

import styles from './style'

export default function ImageButton(props) {
  const { uri, produto, valor } = props
  return (
    <View style={styles.imgbuttonContainer}>
      <ImageBackground source={{ uri: uri }} style={styles.imgbuttonImagem}>
        <Text style={styles.imgbuttonProduto}>{produto}</Text>
        <Text style={styles.imgbuttonValor}>{valor}</Text>
      </ImageBackground>
    </View>
  )
}

export function ImageContainer(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.imgContainer}>{props.children}</View>
    </ScrollView>
  )
}
