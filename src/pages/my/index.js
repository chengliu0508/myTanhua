import {Button} from 'react-native-elements';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('RootStore')
@observer
class MyApp extends Component {
  constructor(props) {
    super(props);
    console.log('MyApp', props);
  }

  render() {
    return (
      <Button
        title={this.props.RootStore.mobile}
        onPress={() => {
          console.log('Button onPress');
          this.props.RootStore.setMobile(122999);
        }}
      />
    );
  }
}

export default MyApp;
