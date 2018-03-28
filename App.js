import React from 'react';

import {StyleSheet, Text, View, Button, Alert,  AppRegistry} from 'react-native';

import Style from './Style.js';

//npm install --save react-navigation
import {StackNavigator} from 'react-navigation';

//import createReactClass from 'create-react-create';

{/*Headers on pages*/}
class HeaderPageOne extends React.Component {
  render(){
    return (
      <Text>Pick something Stupid </Text>
    );
  }
}

class HeaderPageTwo extends React.Component {
  render(){
    return (
      <Text>Second Page </Text>
    );
  }
}

class HeaderPageThree extends React.Component {
  render(){
    return(
      <Text>Third Page </Text>
    );
  }
}




{/*Main content Body*/}

class FirstScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderPageOne />,
    headerRight: (
      <Button style={Style.rightHeaderButton} title="info"
       onPress={()=> alert('This is a button for settings')}/>
    ),
  };
  render(){
    return (

          {/*Button 1 */},

          <View style={Style.optionsMain}>
              <Button style={Style.optionsMainButton}  title = "Option 1"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { itemId: 1, otherParam: 'Option 1',
             });
            }}
            />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 2 */}

              <Button style={Style.optionsMainButton} title = "Option 2"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { itemId: 2, otherParam: 'Option 2',
              });
              }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 3 */}

              <Button style={Style.optionsMainButton} title = "Option 3"
                onPress={() => {
                this.props.navigation.navigate('pageTwo', { itemId: 3, otherParam: 'Option 3',
                });
                }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 4 */}

              <Button style={Style.optionsMainButton} title = "Option 4"
               onPress={() => {
                this.props.navigation.navigate('pageTwo', { itemId: 4, otherParam: 'Option 4',
                });
                }}/>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 5 */}

              <Button style={Style.optionsMainButton} title = "Option 5"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { itemId: 55, otherParam: 'Option 5',
              });
              }}/>
              <View style={Style.optionsMainSpacing}/>
          </View>
    );
  }
  }


class SecondScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderPageTwo />,
    headerRight: (
      <Button style={Style.rightHeaderButton}
      onPress={()=> alert('This is a button for settings')} title= "info"/>
    ),
  };
  render(){
    return (

          {/*Button 1 */},

          <View style={Style.optionsMain}>
              <Button style={Style.optionsMainButton}  title = "Option A"
              onPress={() => {
              this.props.navigation.navigate('pageThree', { itemId: 11, otherParam: 'Option 1',
             });
            }}
            />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 2 */}

              <Button style={Style.optionsMainButton} title = "Option B"
              onPress={() => {
              this.props.navigation.navigate('pageThree', { itemId: 22, otherParam: 'Option 2',
              });
              }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 3 */}

              <Button style={Style.optionsMainButton} title = "Option C"
                onPress={() => {
                this.props.navigation.navigate('pageThree', { itemId: 33, otherParam: 'Option 3',
                });
                }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 4 */}

              <Button style={Style.optionsMainButton} title = "Option D"
               onPress={() => {
                this.props.navigation.navigate('pageThree', { itemId: 44, otherParam: 'Option 4',
                });
                }}/>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 5 */}

              <Button style={Style.optionsMainButton} title = "Option E"
              onPress={() => {
              this.props.navigation.navigate('pageThree', { itemId: 55, otherParam: 'Option 5',
              });
              }}/>
              <View style={Style.optionsMainSpacing}/>
          </View>
    );
  }
  }

  class ThirdScreen extends React.Component{
    static navigationOptions = {
      headerTitle: <HeaderPageThree />,
      headerRight: (
        <Button style={Style.rightHeaderButton}
        onPress={()=> alert('This is a button for settings')} title= "info"/>
      ),
    };
    render() {
      return (
        <Text> Music</Text>,

        <Text></Text>
      );

    }

  }

//Organizes the pages
const RootStack = StackNavigator({
  pageOne: {
    screen: FirstScreen

  },

  pageTwo: {
    screen: SecondScreen
  },
  pageThree: {

    screen: ThirdScreen
  },
},
{
  initialRouteName: 'pageOne',

}
);

export default class intensify extends React.Component {
  render() {
    return <RootStack/>;
  }

}
