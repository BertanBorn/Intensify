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
      <Text style = {Style.headerStyle}>What are you doing Today? </Text>
    );
  }
}

class HeaderPageTwo extends React.Component {
  render(){
    return (
      <Text style = {Style.headerStyle}>What is your Mood? </Text>
    );
  }
}

class HeaderPageThree extends React.Component {
  render(){
    return(
      <Text style = {Style.headerStyle}>Lets Rock </Text>
    );
  }
}

{/*###########Page 1############### */}
{/*Main content Body*/}

class FirstScreen extends React.Component {


  static navigationOptions = {
    headerTitle: <HeaderPageOne />,
    headerRight: (
      <Button style={Style.rightHeaderButton} title="info" color="#190707"
       onPress={()=> alert('This is a button for settings')}/>
    ),
  };
  render(){
    return (

          {/*Button 1 */},

          <View style={Style.optionsMain}>
              <View style={Style.optionsMainSpacing}/>
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Relaxing" color="#190707"
              accessibilityLabel = "Page One"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { page1_Id: 1, otherParam: 'Option 1',
             });
            }}
            />
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 2 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Excercising" color="#190707"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { page1_Id: 2, otherParam: 'Option 2',
              });
              }}
              />
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 3 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Studying" color="#190707"
                onPress={() => {
                this.props.navigation.navigate('pageTwo', { page1_Id: 3, otherParam: 'Option 3',
                });
                }}
              />
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 4 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Partying" color="#190707"
               onPress={() => {
                this.props.navigation.navigate('pageTwo', { page1_Id: 4, otherParam: 'Option 4',
                });
                }}/>
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 5 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Commuting" color="#190707"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { page1_Id: 5, otherParam: 'Option 5',
              });
              }}/>
              </View>
              <View style={Style.optionsMainSpacing}/>


          {/*Button 6 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Nothing" color="#190707"
              onPress={() => {
              this.props.navigation.navigate('pageTwo', { page1_Id: 6, otherParam: 'Option 6',
              });
              }}/>
              </View>
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
      onPress={()=> alert('This is a button for settings')} title= "info" color="#190707"/>
    ),
  };
  render(){
    const {params} = this.props.navigation.state;
    const otherParam = params ? params.otherParam : null;
    const page1_Id = params ? params.page1_Id: null;
    return (


          {/*Button 1 */},
          <View style={Style.optionsMain}>
              <View style={Style.optionsMainSpacing}/>

              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton}  title = "Happy" color="#190707"
              onPress={() => {
              this.props.navigation.navigate('pageThree',
              {page2_Id: 11, otherParam: 'Option 1', page1_Id});
            }}
            />
            </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 2 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Sad" color="#190707"
              onPress={() => {
              this.props.navigation.navigate('pageThree',
              { page2_Id: 22, otherParam: 'Option 2', page1_Id});
              }}
              />
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 3 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Excited" color="#190707"
                onPress={() => {
                this.props.navigation.navigate('pageThree',
                { page2_Id: 33, otherParam: 'Option 3', page1_Id});
                }}
              />
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 4 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Angry" color="#190707"
               onPress={() => {
                this.props.navigation.navigate('pageThree',
                {page2_Id: 44, otherParam: 'Option 4', page1_Id});
                }}/>
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 5 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "Stressed" color="#190707"
              onPress={() => {
              this.props.navigation.navigate('pageThree',
              {page2_Id: 55, otherParam: 'Option 5', page1_Id });
              }}/>
              </View>
              <View style={Style.optionsMainSpacing}/>

          {/*Button 6 */}
              <View style={Style.buttonStyle}>
              <Button style={Style.optionsMainButton} title = "neutral" color="#190707"
              onPress={() => {
              this.props.navigation.navigate('pageThree', {
              page2_Id: 66, otherParam: 'Option 6', page1_Id });
              }}/>
              </View>
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
        onPress={()=> alert('This is a button for settings')} title= "info" color="#190707"/>
      ),
    };
    render() {
      const {params} = this.props.navigation.state;
      const page2_Id = params ? params.page2_Id: null;
      const otherParam = params ? params.otherParam : null;
      const page1_Id = params ? params.page1_Id: null;

      return (
        <View style={Style.optionsMain}>
          <Text> Spotify Music</Text>
          <Text>page2_Id: {JSON.stringify(page2_Id)}</Text>
          <Text>Page One Id: {JSON.stringify(page1_Id)}</Text>
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
