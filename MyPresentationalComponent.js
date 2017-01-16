import React, { } from 'react';

import {
   View,
   StyleSheet
} from 'react-native';

const MyPresentationalComponent = () => {
   return (
      <View style={styles.container}>
         <View style={styles.redbox} />
         <View style={styles.bluebox} />
         <View style={styles.blackbox} />
      </View>
   );
};

export default MyPresentationalComponent;

export const styles = StyleSheet.create({
   container: {
   flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'grey',
         minHeight: 650
   },
   redbox: {
      flex: 3,
      width: 100,
      height: 100,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue'
   },
   blackbox: {
      flex: 2,
      width: 100,
      height: 100,
      backgroundColor: 'black'
   },
});
