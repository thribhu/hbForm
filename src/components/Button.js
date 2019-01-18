import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';
const styles = StyleSheet.create({
  box: {
  backgroundColor: 'blue',
  padding: 20,
  borderRadius: 50
  },
  text: {
  alignContent: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: 20
  }
 });
 class Button extends React.Component {
  render() {
  return (
  <TouchableOpacity style={styles.box}>
  <Text style={styles.text}>
  {this.props.title}
  </Text>
  </TouchableOpacity>
  );
  }
 
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 50
        }}
      >
       <Text
         style={{
           color: "white",
           fontSize: 20
         }}
       >
       {this.props.title}
         </Text>
       </TouchableOpacity>
    );
  }
 }

export {Button}