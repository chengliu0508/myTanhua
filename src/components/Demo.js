import React from 'react';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';

const App = () => (
  <Avatar
    rounded
    source={{
      uri: 'https://randomuser.me/api/portraits/men/41.jpg',
    }}
    size="large"
  />
);

export default App;
