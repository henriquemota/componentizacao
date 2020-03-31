import React from 'react'
import { View } from 'react-native'

import Header from './src/components/header'
import Search from './src/components/search'
import ImageButton, { ImageContainer } from './src/components/image-button'

export default function App(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header title='iFood' />
      <Search />
      <ImageContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
          <ImageButton
            key={i}
            uri='https://www.fadepizza.com.br/domains/fadepizza.com.br/media/site/slide-1.jpg'
            produto='produto1'
            valor='100'
          />
        ))}
      </ImageContainer>
    </View>
  )
}
