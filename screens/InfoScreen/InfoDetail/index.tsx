import {
  Box,
  Button,
  Column,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
} from 'native-base';
import { IconChangeAvatar } from '../../../assets/icon/IconChangeAvatar';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const InfoDetailScreen = () => {
  const insets = useSafeAreaInsets();
  const onPressSaveButton = () => {};
  return (
    <Column
      px="16px"
      justifyContent="space-between"
      height="100%"
      pb={insets.bottom}
    >
      <Column
        safeArea
        width="100%"
        justifyContent="center"
        alignItems="center"
        space={4}
      >
        <Box>
          <Image
            source={require('../../../assets/images/img_5.png')}
            height="108"
            resizeMode="cover"
            width="108"
            style={{ borderRadius: 54 }}
          />
          <Pressable position="absolute" bottom={1} right={0}>
            <IconChangeAvatar />
          </Pressable>
        </Box>
        <Heading color="primary.200">Edmund Corkery</Heading>
        <Input
          borderColor="#3F3F46"
          color="primary.200"
          value="Alfredo Baptista"
          placeholderTextColor="#71717A"
          mt={1}
          type="text"
          placeholder="Email"
          size="2xl"
          bgColor="primary.50"
          borderRadius={12}
        />

        <Input
          borderColor="#3F3F46"
          color="primary.200"
          placeholderTextColor="#71717A"
          mt={1}
          type="text"
          placeholder="hello@baptista.com"
          size="2xl"
          bgColor="primary.50"
          borderRadius={12}
        />

        <Input
          borderColor="#3F3F46"
          color="primary.200"
          placeholderTextColor="#71717A"
          mt={1}
          type="text"
          placeholder="Số điện thoại"
          size="2xl"
          bgColor="primary.50"
          borderRadius={12}
        />
      </Column>
      <Button onPress={onPressSaveButton} mt="2" width="100%">
        <Text color="primary.200" fontWeight="700">
          Lưu
        </Text>
      </Button>
    </Column>
  );
};
