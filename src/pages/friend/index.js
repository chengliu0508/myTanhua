import {Button} from 'react-native-elements';
import React from 'react';
import {View, Text} from 'react-native';
// import {useNavigationContainerRef} from '@react-navigation/native';

const Friend = props => {
  //const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  return (
    <View style={{height: 180}}>
      <Text>交友</Text>
      <Button
        title="Go Login"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};
export default Friend;
