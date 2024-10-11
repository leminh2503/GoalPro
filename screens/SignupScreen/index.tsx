import * as React from 'react';
import {
  Button,
  Center,
  Column,
  Heading,
  Image,
  Input,
  KeyboardAvoidingView,
  Text,
} from 'native-base';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export const SignupScreen: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets();
  const onPressSignup = async () => {
    setTimeout(() => {
      props.navigation.navigate('Otp');
    }, 1000);
  };
  const onPressSignInLink = async () => {
    props.navigation.navigate('Signin');
  };
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        marginBottom: insets.bottom,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Center safeArea width="100%">
        <Column space={2} p="2" py="8" w="90%">
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginBottom: 20,
            }}
            resizeMode="contain"
            source={require('../../assets/images/logo.png')}
          ></Image>
          <Heading color="primary.700" textAlign="center" size="2xl">
            Đăng ký
          </Heading>
          <Text color="primary.100" textAlign="center">
            Đăng ký tài khoản của bạn
          </Text>
          <Input
            borderColor="#3F3F46"
            color="primary.200"
            placeholderTextColor="#71717A"
            mt={3}
            type="text"
            placeholder="Tên"
            size="2xl"
            bgColor="primary.50"
            borderRadius={12}
          />
          <Input
            borderColor="#3F3F46"
            color="primary.200"
            placeholderTextColor="#71717A"
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
            type="password"
            placeholder="Mật khẩu"
            size="2xl"
            bgColor="primary.50"
            borderRadius={12}
          />
          <Input
            borderColor="#3F3F46"
            color="primary.200"
            placeholderTextColor="#71717A"
            type="password"
            placeholder="Nhập lại mật khẩu"
            size="2xl"
            bgColor="primary.50"
            borderRadius={12}
          />
          <Button onPress={onPressSignup} mt="2">
            <Text color="primary.200" fontWeight="700">
              Đăng ký
            </Text>
          </Button>
        </Column>
      </Center>
      <Center>
        <Text>
          Bạn chưa có tài khoản?{' '}
          <Text
            color="primary.700"
            fontWeight="bold"
            onPress={onPressSignInLink}
          >
            Đăng nhập
          </Text>
        </Text>
      </Center>
    </KeyboardAvoidingView>
  );
};
