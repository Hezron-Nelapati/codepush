import React from 'react';
import CodePush from 'react-native-code-push';
import {Text} from 'react-native';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
CodePush.sync({
updateDialog: true,
installMode: CodePush.InstallMode.IMMEDIATE
});

class App extends React.Component{
  render(){
    return (
      <Text>Hello</Text>
    );
  }
}

export default CodePush(codePushOptions)(App)