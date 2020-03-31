import React from 'react'
import {
  ScrollView,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './style'

export default function ImageButton(props) {
  const { uri, produto, valor } = props
  return (
    <TouchableOpacity style={styles.imgbuttonContainer}>
      <ImageBackground source={{ uri: uri }} style={styles.imgbuttonImagem}>
        <View style={styles.ImageButtonTextWrap}>
          <Text style={styles.imgbuttonProduto}>{produto}</Text>
        </View>
        <View style={styles.ImageButtonTextWrap}>
          <Text style={styles.imgbuttonValor}>{valor}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export function ImageContainer(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.imgContainer}>{props.children}</View>
    </ScrollView>
  )
}
