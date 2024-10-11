import React from 'react';
import {
  Box,
  Column,
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
import { IconBack } from '../../assets/icon/IconBack';
import { IconChangeAvatar } from '../../assets/icon/IconChangeAvatar';
import { IconPeople } from '../../assets/icon/IconPeople';
import { IconRight } from '../../assets/icon/IconRight';
import { IconKey } from '../../assets/icon/IconKey';
import { IconBell } from '../../assets/icon/IconBell';
import { IconSignOut } from '../../assets/icon/IconSignOut';
import { Switch } from 'react-native';

export const InfoScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Column
        safeArea
        px="16px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        space={4}
      >
        <Heading textAlign="center" color="primary.200" size="md">
          Cá nhân
        </Heading>
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
        </Box>
        <Heading color="primary.200">Edmund Corkery</Heading>
        <Pressable onPress={() => navigation.navigate('InfoDetail')}>
          <Row
            space={3}
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box width={12} height={12} borderRadius={8} p={3} bg="primary.500">
              <IconPeople width={24} height={24} color="#71717A" />
            </Box>
            <Text flex={1} color="primary.200" fontWeight="bold" fontSize="lg">
              Thông tin
            </Text>
            <IconRight />
          </Row>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ChangePassword')}>
          <Row
            space={3}
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box width={12} height={12} borderRadius={8} p={3} bg="primary.500">
              <IconKey width={24} height={24} />
            </Box>
            <Text flex={1} color="primary.200" fontWeight="bold" fontSize="lg">
              Đổi mật khẩu
            </Text>
            <IconRight />
          </Row>
        </Pressable>
        <Row
          space={3}
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width={12} height={12} borderRadius={8} p={3} bg="primary.500">
            <IconBell width={24} height={24} />
          </Box>
          <Text flex={1} color="primary.200" fontWeight="bold" fontSize="lg">
            Thông báo
          </Text>
          <Switch />
        </Row>
        <Pressable onPress={() => navigation.navigate('Signin')}>
          <Row
            space={3}
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box width={12} height={12} borderRadius={8} p={3} bg="primary.500">
              <IconSignOut width={24} height={24} />
            </Box>
            <Text flex={1} color="primary.200" fontWeight="bold" fontSize="lg">
              Đăng xuất
            </Text>
            <IconRight />
          </Row>
        </Pressable>
      </Column>
    </ScrollView>
  );
};
