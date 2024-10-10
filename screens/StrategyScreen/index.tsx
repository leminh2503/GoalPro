import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Image,
  Pressable,
  Row,
  ScrollView,
  Text,
} from 'native-base';
import { IconCamera } from '../../assets/icon/IconCamera';
import { homeData } from '../../data/home';
import { useNavigation } from '@react-navigation/native';

export const StrategyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Image
        height={500}
        resizeMode="contain"
        source={require('../../assets/images/img.png')}
      />

      <Box px="16px">
        <Heading my={4} size="md" color="primary.200">
          TẬP LUYỆN
        </Heading>
      </Box>
    </ScrollView>
  );
};
