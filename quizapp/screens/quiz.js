import { StyleSheet, Text, View , TouchableOpacity, Button} from 'react-native'
import React, { useEffect, useState } from 'react'

const shuffleArray = (array) => {
  for(let i = array.length - 1; i > 0; i --){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {



  const [questions, setQuestions] = useState();
  const [quesNo, setQuesNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  const getQuiz = async () => {
    setIsLoading(true)
    const url =  "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results)
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false)
  }

  const handleNextPress = () => {
    setQuesNo(quesNo + 1);
    setOptions(generateOptionsAndShuffle(questions[quesNo + 1]))
  }

  useEffect(() => {
    getQuiz()
  },[]);

  const generateOptionsAndShuffle = (_question) => {

    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)

    return options
  }


  const handleSelectedOptions = (_option) => {
    if(_option === questions[quesNo].correct_answer){
      setScore(score + 10)
    }

      if (quesNo !== 9) {
        setQuesNo(quesNo + 1);
        setOptions(generateOptionsAndShuffle(questions[quesNo + 1]))
      } 
      else if(quesNo === 9){
        handleShowResult();
      }
  }

  const handleShowResult = () => {

    navigation.navigate('result', {
      score:score
    })
  }

  return (
    <View style={styles.parent}>

    {isLoading ? <View style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
      <Text style={{fontSize:32, fontWeight:'800'}}>Loading....</Text>
    </View> : questions && <View style={styles.container}>
      <View style={styles.top}>
      <Text style={styles.question}>{ decodeURIComponent(questions[quesNo].question)}</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOptions(options[0])}>
        <Text style={styles.option}>{ decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOptions(options[1])}>
        <Text style={styles.option}>{ decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOptions(options[2])}>
        <Text style={styles.option}>{ decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOptions(options[3])}>
        <Text style={styles.option}>{ decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity>
        
        {quesNo !== 9 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
        
        {quesNo === 9 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
        <Text style={styles.buttonText}>SHOW RESULT</Text>
        </TouchableOpacity>}

        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('result')}>
        <Text style={styles.buttonText}>END</Text>
        </TouchableOpacity> */}
      </View>

    
    </View>}


    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({

  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },
  top:{
    marginVertical:16,
  },

  options:{
    marginVertical:16,
    flex:1,
  },
  bottom:{
    marginBottom:12,
    paddingVertical:16,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },

  button:{
    backgroundColor:'#1A759F',
    padding:12,
    paddingHorizontal:16,
    borderRadius:16,
    marginBottom:10,
    alignItems:'center'
  },
  buttonText:{
    fontSize:16,
    fontWeight:'600',
    color:'white'

  },
  question:{
    fontSize:28,

  },
  option:{
    fontSize:18,
    fontWeight:'500',
    color:'white'
  },
  optionButton:{
    paddingVertical:12,
    marginVertical:6,
    backgroundColor:'#34A0A4',
    paddingHorizontal:12,
    borderRadius:12,
  },
  parent:{
    height:'100%',
  }
})