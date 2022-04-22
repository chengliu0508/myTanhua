import {Avatar, Badge} from 'react-native-elements';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import request from '../../utils/request';
const Group = props => {
  useEffect(() => {
    (async function anyNameFunction() {
      const res = await request.privateGet('/my/userinfo');
      console.log('Group request:', res);
    })();
  }, [props]);
  return (
    <View>
      <Avatar
        rounded
        source={{
          uri: 'https://randomuser.me/api/portraits/men/41.jpg',
        }}
        size="large"
      />

      <Badge value="99+" status="success" />
      <Badge value="99+" status="error" />
      <Badge value="99+" status="primary" />
      <Badge value="99+" status="warning" />
    </View>
  );
};
export default Group;
