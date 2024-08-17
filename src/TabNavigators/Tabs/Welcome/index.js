import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000'}}>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ebeef7',
        justifyContent:'center',
        alignItems:'center'
    }
})