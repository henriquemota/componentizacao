import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 10
  },
  imgbuttonContainer: {
    width: 110,
    height: 110,
    margin: 10
  },
  imgbuttonImagem: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  ImageButtonTextWrap: {
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    padding: 5
  },
  imgbuttonProduto: {
    fontSize: 10,
    flexWrap: 'wrap'
  },
  imgbuttonValor: {
    fontSize: 8,
    flexWrap: 'wrap'
  }
})

export default styles
