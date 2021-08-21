import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={colors.brand} />
    </View>
  );
};

export default Loading;
