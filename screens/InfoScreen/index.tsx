import React from 'react';
import {
  Box,
  Column,
  Heading,
  Image,
  Pressable,
  Row,
  ScrollView,
  Text,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
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
            source={require('../../assets/images/img_5.png')}
            height="108"
            resizeMode="cover"
            width="108"
            style={{ borderRadius: 54 }}
          />
        </Box>
        <Heading color="primary.200">Alfredo Baptista</Heading>
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
