import {
  Box,
  FlatList,
  Heading,
  Image,
  Pressable,
  Row,
  Text,
} from 'native-base';
import { IconBack } from '../../../assets/icon/IconBack';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { trainingData } from '../../../data/home';
import { IconLevel } from '../../../assets/icon/IconLevel';

export const TrainingScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Box safeArea px="16px">
      <Row>
        <Pressable onPress={() => navigation.goBack()}>
          <IconBack />
        </Pressable>
        <Heading flex={1} textAlign="center" color="primary.200" size="md">
          {route.params?.item?.title}
        </Heading>
      </Row>
      <FlatList
        contentContainerStyle={{ paddingVertical: 10 }}
        data={trainingData}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('TrainingDetail', {
                item: item,
              });
            }}
            key={index}
            mt={2}
          >
            <Image
              style={{ height: 200, borderRadius: 16 }}
              source={item.image}
            />
            <Row mt={2} justifyContent="space-between" alignItems="center">
              <Text color="primary.200" fontWeight="bold" flex={1}>
                {item.title}
              </Text>
              <Row space={1} alignItems="center">
                <IconLevel />
                <Text>{item.level}</Text>
              </Row>
            </Row>
          </Pressable>
        )}
      />
    </Box>
  );
};
