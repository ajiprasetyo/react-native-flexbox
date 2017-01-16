import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import MyPresentationalComponent, { styles } from './MyPresentationalComponent';

export default class belajar extends Component {
   constructor() {
      super();
      this.state = {
         myText: 'Lorem ipsum dolor sit amet.'
      };
   }
   render() {
      return (
         <View>
                <MyPresentationalComponent style={styles.container} />
         </View>
      );
   }
}
AppRegistry.registerComponent('belajar', () => belajar);
