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
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/23b9/dd21/1624cf0ebaa4dde2c075ad6fa6ee8f5d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hohYeQJopfLYzKuNiaDtJ8FzIWZSoWMgn0kTMoovpxE8TcGRHs3SBlP1vOYX~zMm5nurln72-CqXwO9Bb4unKpe-if7gk1cEwZ95MqUWLqrU1l~OmF8NLKAh19WFYL5x5i1rUYY~na1W7yqHWgASThxf4657tcyTOE9QCFazhv1mUCoHXeljFNYKQBQS2SntKJmktbb6w1I88Ad8DjWL5DGQKl-22cjiNqYlMt1NB2W6~umFGpyKPnuEQd1uRYnMHP7w-FosqXoF9a6DjgSd~pLhsrkZJJ8xYd0pYC4MxN4fn1VY6gZcn4wnGtGATQUWD75Qw~hu~N5MQjyoRkGqNA__',
            }}
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
          value="Edmund Corkery"
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
          placeholder="edmundcorkery@gmail.com"
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
