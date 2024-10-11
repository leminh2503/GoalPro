import React from 'react';
import {
  Box,
  Button,
  Column,
  Heading,
  Image,
  Input,
  Pressable,
  Row,
  Text,
} from 'native-base';
import { IconBack } from '../../../assets/icon/IconBack';
import { useNavigation } from '@react-navigation/native';
import { IconChangeAvatar } from '../../../assets/icon/IconChangeAvatar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ChangePassword = () => {
  const navigation = useNavigation();
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
        <Text fontSize="14px">
          Mật khẩu mới của bạn phải khác với mật khẩu đã sử dụng trước đó
        </Text>
        <Input
          borderColor="#3F3F46"
          color="primary.200"
          placeholderTextColor="#71717A"
          mt={1}
          type="text"
          placeholder="Mật khẩu cũ"
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
          placeholder="Mật khẩu mới"
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
          placeholder="Nhập lại mật khẩu"
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
