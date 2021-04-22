import React from 'react';
import codePush from 'react-native-code-push';
import {Text} from 'react-native';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
codePush.sync({
updateDialog: true,
installMode: codePush.InstallMode.IMMEDIATE
});

class App extends React.Component{
  render(){
    return (
      <Text>Hello</Text>
    );
  }
}

App = codePush(codePushOptions)(App);

export default App;