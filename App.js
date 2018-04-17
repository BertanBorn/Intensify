import React from 'react';

import {StyleSheet, Text, View, Button, Alert,  AppRegistry} from 'react-native';

import Style from './Style.js';

//npm install --save react-navigation

// State class top level set button output to this state
import {StackNavigator} from 'react-navigation';


{/*Headers on pages*/}
class HeaderPageOne extends React.Component {
  render(){
    return (
      <Text>What are you doing Today? </Text>
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

{/*###########Page 1############### */}
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
              <View style={Style.optionsMainSpacing}/>
              <Button style={Style.optionsMainButton}  title = "Relaxing"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { itemId: 1, otherParam: 'Option 1',
             });
            }}
            />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 2 */}

              <Button style={Style.optionsMainButton} title = "Excercising"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { itemId: 2, otherParam: 'Option 2',
              });
              }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 3 */}

              <Button style={Style.optionsMainButton} title = "Studying"
                onPress={() => {
                this.props.navigation.navigate('pageTwo', { itemId: 3, otherParam: 'Option 3',
                });
                }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 4 */}

              <Button style={Style.optionsMainButton} title = "Partying"
               onPress={() => {
                this.props.navigation.navigate('pageTwo', { itemId: 4, otherParam: 'Option 4',
                });
                }}/>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 5 */}

              <Button style={Style.optionsMainButton} title = "Commuting"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { itemId: 5, otherParam: 'Option 5',
              });
              }}/>
              <View style={Style.optionsMainSpacing}/>


          {/*Button 6 */}

              <Button style={Style.optionsMainButton} title = "Nothing"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { itemId: 6, otherParam: 'Option 6',
              });
              }}/>
              <View style={Style.optionsMainSpacing}/>
          </View>
    );
  }
  }

{/*###########Page 2############### */}
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
              <View style={Style.optionsMainSpacing}/>
              <Button style={Style.optionsMainButton}  title = "Happy"
              onPress={() => {
              this.props.navigation.navigate('pageThree', { itemId: 11, otherParam: 'Option 1',
             });
            }}
            />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 2 */}

              <Button style={Style.optionsMainButton} title = "Sad"
              onPress={() => {
              this.props.navigation.navigate('pageThree', { itemId: 22, otherParam: 'Option 2',
              });
              }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 3 */}

              <Button style={Style.optionsMainButton} title = "Excited"
                onPress={() => {
                this.props.navigation.navigate('pageThree', { itemId: 33, otherParam: 'Option 3',
                });
                }}
              />
              <View style={Style.optionsMainSpacing}/>

          {/*Button 4 */}

              <Button style={Style.optionsMainButton} title = "Angry"
               onPress={() => {
                this.props.navigation.navigate('pageThree', { itemId: 44, otherParam: 'Option 4',
                });
                }}/>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 5 */}

              <Button style={Style.optionsMainButton} title = "Stressed"
              onPress={() => {
              this.props.navigation.navigate('pageThree', { itemId: 55, otherParam: 'Option 5',
              });
              }}/>
              <View style={Style.optionsMainSpacing}/>

              <Button style={Style.optionsMainButton} title = "neutral"
              onPress={() => {
              this.props.navigation.navigate('pageThree', { itemId: 66, otherParam: 'Option 6',
              });
              }}/>
              <View style={Style.optionsMainSpacing}/>
          </View>
    );
  }
  }

{/*###########Page 3############### */}
  class ThirdScreen extends React.Component{
    static navigationOptions = {
      headerTitle: <HeaderPageThree />,
      headerRight: (
        <Button style={Style.rightHeaderButton}
        onPress={()=> alert('This is a button for settings')} title= "info"/>
      ),
    };
    render() {
      const {params} = this.props.navigation.state;
      const itemId = params ? params.itemId:null;
      const otherParam = params ? params.otherParam : null;

      return (
        <View style={Style.optionsMain}>
          <Text> Spotify Music</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          {/*<Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Text>Page one input: {JSON.stringify(pageOneInput)} </Text> */}
        </View>
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
