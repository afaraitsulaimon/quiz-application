import {Image, TouchableOpacity, StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Title titleText='QUIZ GAME' />
      <View style={styles.bannerContainer}>
            <Image source={ require('../assets/quizimage.png')} 
                style={styles.banner}
                resizeMode='contain'
                />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('quiz')} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <Button
        title="Go to quiz"
        onPress={() => navigation.navigate('quiz')}
      />
    </View>
  )
}

export default Home

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

    }
})