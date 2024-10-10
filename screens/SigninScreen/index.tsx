import * as React from 'react';

// api
//components
import {
  Box,
  Button,
  Center,
  Checkbox,
  Column,
  FormControl,
  Heading,
  Image,
  Input,
  KeyboardAvoidingView,
  Row,
  Spacer,
  Text,
  useToast,
} from 'native-base';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Signin'>;

export const SigninScreen: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const insets = useSafeAreaInsets();
  const { loginInfo } = useSelector((state: RootState) => state.auth);
  const [rememberMe, setRememberMe] = React.useState(!!loginInfo?.username);
  const onPressSigninButton = async () => {
    props.navigation.navigate('BottomTab');
  };
  const onPressSignupLink = () => {
    props.navigation.navigate('Signup');
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
      <Center width="100%">
        <Column space={2} safeArea p="2" py="8" w="90%">
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
            Đăng nhập
          </Heading>
          <Text color="primary.100" textAlign="center">
            Đăng nhập vào tài khoản của bạn
          </Text>
          <Input
            borderColor="#3F3F46"
            color="primary.200"
            placeholderTextColor="#71717A"
            mt={3}
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
          <Row space={3} width="100%" mt={3}>
            <Checkbox
              value=""
              isChecked={rememberMe}
              onChange={setRememberMe}
              color="primary.100"
            >
              <Text>Ghi nhớ đăng nhập</Text>
            </Checkbox>
            <Spacer />
            <Text color="primary.400">Quên mật khẩu?</Text>
          </Row>
          <Button onPress={onPressSigninButton} mt="2">
            <Text color="primary.200" fontWeight="700">
              Đăng nhập
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
            onPress={onPressSignupLink}
          >
            Đăng ký
          </Text>
        </Text>
      </Center>
    </KeyboardAvoidingView>
  );
};
