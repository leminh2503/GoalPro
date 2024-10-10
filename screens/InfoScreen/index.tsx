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

export const InfoScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Box px="16px">
        <Heading my={4} size="md" color="primary.200">
          TẬP LUYỆN
        </Heading>

        <FlatList
          data={homeData}
          numColumns={2} // Hiển thị 2 cột
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                navigation.navigate('Training', {
                  item: item,
                })
              }
              key={item.id}
              mt={2}
              mr={index % 2 === 0 ? 2 : 0}
              flexBasis="48%"
              bgColor="#3F3F46"
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
  );
};
