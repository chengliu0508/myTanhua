import React from 'react';
import {ThemeProvider, Button} from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
  },
};

// Your App
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button title="My Button" />
      <Button title="My 2nd Button" />
    </ThemeProvider>
  );
};

export default App;
