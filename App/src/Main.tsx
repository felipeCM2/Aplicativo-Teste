import React from 'react';
import { View, StatusBar } from "react-native";

import Routes from './routes';

const Main: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Routes />
    </View>
    </>
    );

    export default Main;
