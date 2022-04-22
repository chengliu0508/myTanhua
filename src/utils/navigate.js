import {NavigationActions, StackActions} from '@react-navigation/compat';

import React from 'react';

export const isMountedRef = React.createRef();

export const navigationServiceRef = React.createRef();

export function navigate(name, params) {
  if (isMountedRef.current && navigationServiceRef.current) {
    console.log('Navigation Should happen');
    try {
      navigationServiceRef.current.navigate('App', params);
    } catch (e) {
      console.log('NavigationDebug Error: ', e);
    }
  } else {
  }
}

export default {
  navigate,
};
