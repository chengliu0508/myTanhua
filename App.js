import React, {useEffect} from 'react';
import {Provider} from 'mobx-react';
import RootStore from './src/mobx/index';

import Navigator from './src/nav';

// Your App
const App = () => {
  useEffect(() => {
    RootStore.setUserInfo('13148930718', 'token 666', 666);
  }, []);
  return (
    <Provider RootStore={RootStore}>
      <Navigator />
    </Provider>
  );
};

export default App;
