import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
export default class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      visible:false,
      uri:require('./src/images/dice1.png')
    }
  }

  
  generateRandomNumber=()=>
  {
    return Math.floor(Math.random() * 6) + 1
  }
  RotateDice = () =>
  {
    this.setState(()=>({
      visible:true
    }))
    let res=this.generateRandomNumber();
    res=res.toString();
    

    
    this.setState(()=>({
      visible:false
    }))
    if(res==='1')
    {
      this.setState(()=>({
        uri:require('./src/images/dice1.png')
      }))
    }
    if(res==='1')
    {
      this.setState(()=>({
        uri:require('./src/images/dice1.png')
      }))
    }
    if(res==='2')
    {
      this.setState(()=>({
        uri:require('./src/images/dice2.png')
      }))
    }
    if(res==='3')
    {
      this.setState(()=>({
        uri:require('./src/images/dice3.png')
      }))
    }
    if(res==='4')
    {
      this.setState(()=>({
        uri:require('./src/images/dice4.png')
      }))
    }
    if(res==='5')
    {
      this.setState(()=>({
        uri:require('./src/images/dice5.png')
      }))
    }
    if(res==='6')
    {
      this.setState(()=>({
        uri:require('./src/images/dice6.png')
      }))
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <Spinner visible={this.state.visible} color={"#E71C23"} size={"large"} animation={"fade"}
      textContent={"Rotating Dice"} textStyle={{color:"black"}}>
      </Spinner>


      <Image source={this.state.uri}></Image>
      
      <TouchableOpacity onPress={this.RotateDice}>
      <Text style={styles.Button}>Tap to Roll Dice </Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA7773',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button :{
    marginTop:20,
    color:"white",
    fontSize:25,
    borderWidth:3,
    borderColor:"white",
    paddingVertical:15,
    paddingHorizontal:15
  }
});
