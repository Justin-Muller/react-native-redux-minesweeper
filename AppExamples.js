/**
 * A bunch of examples from:
 * https://facebook.github.io/react-native/docs
 */

/* Fetch API with loading spinner */

import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setTimeout(() => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.movies),
          }, function() {
            // do something with new state
          });
        }, 3000);

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator size={'large'} />

        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}

/**/

/* Section header list *

import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);

/**/

/* ScrollView *

import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView horizontal maximumZoomScale={2} minimumZoomScale={0.5}>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize:96}}>What's the best</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }

}



// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);

/**/

/* Button + Textbox *

 import React, { Component } from 'react';
 import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {unsubmittedText: '', text: ''};
  }

  render() {
    return (
      <View style={{padding: 10, paddingTop: 50}}>
        <TextInput
          blurOnSubmit={true}
          clearButtonMode={'always'}
          keyboardAppearance={'dark'}
          style={{height: 40}}
          placeholder="Type here to translate!"
          returnKeyType={'done'}
          onChangeText={(text) => {
            this.setState({unsubmittedText: text})
          }}
          onSubmitEditing={() => {
            this.setState({text: this.state.unsubmittedText})
          }}
        />

        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <TouchableOpacity
          onPress={() => { Alert.alert('You pressed me!') }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Hello Justin. Press me.</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);

/**/

/* Starting page *

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => console.log('pressed!!')}
              style={{ color: 'red', fontSize: '50px' }}>
          Hello! testing a long long long long
          long long text
        </Text>
        <Text>Quick change. updated!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}


 const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 20
  },

  buttonText: {
    color: '#fff'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**/
