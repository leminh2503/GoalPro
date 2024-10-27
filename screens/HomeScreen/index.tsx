import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Pressable,
  Row,
  ScrollView,
  Text,
} from 'native-base';
import { IconCamera } from '../../assets/icon/IconCamera';
import { homeData } from '../../data/home';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'expo-image';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{ height: '100%', flex: 1 }}
      source={require('../../assets/images/home.jpeg')}
    >
      <Box top="20" left="0" right="0" alignItems="center">
        <Heading size="2xl" color="primary.200">
          GoalPro
        </Heading>
      </Box>

      <Box pt="300" flex="1">
        <ScrollView>
          <Box px="16px">
            <Heading my={4} size="md" color="primary.200">
              TẬP LUYỆN
            </Heading>

            <FlatList
              data={homeData}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('Training', {
                      item: item,
                    })
                  }
                  key={item.id}
                  mt={2}
                  flexBasis="48%"
                  bgColor="#D4D4D84D"
                  borderRadius="16"
                  px="16px"
                  py="12px"
                >
                  <Heading size="md" color="primary.200">
                    {item.title}
                  </Heading>
                  <Row space={1} alignItems="center">
                    <Box height={0.5} flex={1} bgColor="primary.100"></Box>
                    <IconCamera />
                  </Row>
                  <Text color="primary.200">{item.videoCount} video</Text>
                </Pressable>
              )}
              contentContainerStyle={{ paddingBottom: 80 }}
            />
          </Box>
        </ScrollView>
      </Box>
    </ImageBackground>
  );
};
