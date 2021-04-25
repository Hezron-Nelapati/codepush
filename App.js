import React from 'react';
import codePush from 'react-native-code-push';
import {Text} from 'react-native';

let codePushOptions = { 
      checkFrequency: codePush.CheckFrequency.ON_APP_START,
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE 
    };

class App extends React.Component{
  
  componentDidMount(){
    codePush.sync(codePushOptions);
  }

  render(){
    return (
      <>
      <Text>Hello</Text>
      <Text>Codepush Checking</Text>
      </>
    );
  }
}

App = codePush(codePushOptions)(App);

export default App;