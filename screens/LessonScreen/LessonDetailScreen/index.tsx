import React from 'react';
import {
  Box,
  Heading,
  Image,
  Pressable,
  Row,
  ScrollView,
  Text,
} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconBack } from '../../../assets/icon/IconBack';
import { IconBall } from '../../../assets/icon/IconBall';
import { IconGoal } from '../../../assets/icon/IconGoal';
import { IconHandFan } from '../../../assets/icon/IconHandFan';

export const LessonDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <ScrollView>
      <Image
        height={250}
        width="100%"
        resizeMode="cover"
        source={route.params?.item?.image}
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
        <Heading fontSize="xl" color="primary.200" mt={8} mb={2}>
          Cải thiện
        </Heading>
        <Row flexWrap space={2} alignItems="center">
          {route.params.item.improve.map((item, index) => (
            <Box bg="primary.500" borderRadius="8px" px="12px" py="4px" mt={2}>
              <Text color="primary.200">{item}</Text>
            </Box>
          ))}
        </Row>
        <Heading fontSize="xl" color="primary.200" mt={8} mb={2}>
          Chuẩn bị
        </Heading>
        <Row alignItems="center" space={8}>
          <Row alignItems="center" space={1}>
            <IconBall />
            <Text color="primary.200">x {route.params.item?.prepare.ball}</Text>
          </Row>
          <Row alignItems="center" space={1}>
            <IconGoal />
            <Text color="primary.200">x {route.params.item?.prepare.goal}</Text>
          </Row>
          <Row alignItems="center" space={1}>
            <IconHandFan />
            <Text color="primary.200">x {route.params.item?.prepare.fan}</Text>
          </Row>
        </Row>
      </Box>
    </ScrollView>
  );
};
