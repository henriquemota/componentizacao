import React from 'react'
import { View, TextInput } from 'react-native'

import styles from './style'

export default function Search(props) {
  return (
    <View style={styles.searchContainer}>
      <TextInput placeholder='buscar' style={styles.searchInput} />
    </View>
  )
}
