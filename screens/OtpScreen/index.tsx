import * as React from 'react';
import {
  Button,
  Center,
  Column,
  Heading,
  Image,
  Input,
  KeyboardAvoidingView,
  Row,
  Text,
  useToast,
} from 'native-base';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export const OtpScreen: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets();
  const [countDown, setCountDown] = useState(60);
  const onPressOtp = async () => {
    props.navigation.navigate('BottomTab');
  };

  useEffect(() => {
    const interval = setInterval(() => setCountDown((pre) => pre - 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
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
          <Heading color="primary.700" textAlign="center" size="2xl">
            Xác thực tài khoản
          </Heading>
          <Text color="primary.100" textAlign="center">
            Chúng tôi phải gửi mã xác minh tới email
          </Text>
          <Text color="primary.700" textAlign="center">
            ***demo@gmail.com
          </Text>
          <Input
            borderColor="#3F3F46"
            color="primary.200"
            placeholderTextColor="#71717A"
            mt={8}
            type="text"
            placeholder="Nhập mã xác thực"
            size="2xl"
            bgColor="primary.50"
            borderRadius={12}
          />
          <Button onPress={onPressOtp} mt="2">
            <Text color="primary.200" fontWeight="700">
              Xác thực
            </Text>
          </Button>
          <Row justifyContent="center" space={1}>
            <Text>Gửi lại mã sau</Text>
            <Text color="primary.700" fontWeight="bold">
              {countDown}s
            </Text>
          </Row>
        </Column>
      </Center>
    </KeyboardAvoidingView>
  );
};
