import React from 'react';
import CodePush from 'react-native-code-push';
import {Text} from 'react-native';

class App extends React.Component{
  render(){
    return (
      <Text>Hello</Text>
    );
  }
}

export default CodePush(App)