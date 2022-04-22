import {Button, ThemeProvider} from 'react-native-elements';
import React, {useEffect} from 'react';
const Group = props => {
  useEffect(() => {
    console.log('Group props', props);
  }, [props]);
  return (
    <ThemeProvider>
      <Button title="group!" />
    </ThemeProvider>
  );
};
export default Group;
