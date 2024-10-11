import React from 'react';
import { Box, Heading, Image, Pressable, ScrollView, Text } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconBack } from '../../../assets/icon/IconBack';

export const StrategyDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <ScrollView>
      <Image
        height={250}
        width="100%"
        resizeMode="cover"
        source={{ uri: route.params?.item?.img ?? '' }}
      />
      <Pressable
        onPress={() => navigation.goBack()}
        position="absolute"
        top={12}
        left="12px"
        zIndex={9}
      >
        <IconBack />
      </Pressable>
      <Box px="16px" py="24px">
        <Heading size="md" color="primary.700">
          {route.params?.item?.title}
        </Heading>
        <Text mt={4} color="primary.200">
          {route.params?.item?.description}
        </Text>
      </Box>
    </ScrollView>
  );
};
