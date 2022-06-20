import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Result = ({navigation, route}) => {
  const {score } = route .params


  return (
    <View style={styles.container}>
      <Title titleText='RESULTS' />
        <Text style={styles.scoreValue}>{score}</Text>

        <View style={styles.bannerContainer}>
          {score > 40 ? <Image source={ require('../assets/passimage.png') } style={styles.banner} resizeMode="contain" /> : <Image source={ require('../assets/fail-image.png') } style={styles.banner} resizeMode="contain" />}
        </View>

 
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
            <Text style={{ color:'white' }}>Go to Home</Text>
          </TouchableOpacity>
      
    </View>
  )
}

export default Result

const styles = StyleSheet.create({

        banner:{
          height:200,
          width:200,
      },

      bannerContainer:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
      },

      container:{
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%'
      },

      button:{

      width:'100%',
      backgroundColor:'#184E77',
      padding:16,
      borderRadius:16,
      marginBottom:10,
      alignItems:'center'
      },
      buttonText:{
      fontSize:24,
      fontWeight:'600',
      color:'white'

      },
      scoreValue:{
        fontSize:24,
        fontWeight:'800',
        alignSelf:'center'
      }
})