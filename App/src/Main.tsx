import React, { useState } from 'react';
import { View, StatusBar } from "react-native";

import Routes from './routes';

const Main: React.FC = () => {
  const [ hiddenStatusBar, setHiddenStatusBar ] = useState(false);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" hidden={true} />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
      </>
      )
};

    export default Main;
