import React from 'react';
import {
  Column,
  FlatList,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { lessonData } from '../../data/lesson';

export const LessonScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Column space={4} px="16px" safeArea>
        <Heading my={4} size="md" color="primary.200" textAlign="center">
          Chiến thuật và kiến thức
        </Heading>
        <Heading size="md" color="primary.700">
          Khám phá
        </Heading>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={lessonData.discover}
          renderItem={({ item, index }) => (
            <Pressable
              width={160}
              height={160}
              onPress={() => {
                navigation.navigate('LessonDetail', {
                  item: item,
                });
              }}
              key={index}
              mt={2}
              mr={3}
            >
              <Image
                style={{ height: 96, borderRadius: 16 }}
                source={item.image}
              />
              <Text
                mt={1}
                fontSize="sm"
                numberOfLines={2}
                color="primary.200"
                fontWeight="bold"
              >
                {item.title}
              </Text>
              <Text fontSize="sm" numberOfLines={1} color="primary.200">
                {item.description}
              </Text>
            </Pressable>
          )}
          horizontal
        />
        <Heading size="md" color="primary.700" mt={2}>
          Tất cả bài viết
        </Heading>
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          showsHorizontalScrollIndicator={false}
          data={lessonData.all}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                navigation.navigate('LessonDetail', {
                  item: item,
                });
              }}
              key={index}
              mt={3}
              width="100%"
            >
              <Image
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 16,
                }}
                resizeMode="cover"
                source={item.image}
              />
              <Text mt={1} fontSize="md" color="primary.200" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="sm" numberOfLines={2} color="primary.200">
                {item.description}
              </Text>
            </Pressable>
          )}
        />
      </Column>
    </ScrollView>
  );
};
