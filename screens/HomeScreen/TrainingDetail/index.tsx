import { Box, Column, Heading, Image, Pressable, Row, Text } from 'native-base';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconBack } from '../../../assets/icon/IconBack';
import { IconLevel } from '../../../assets/icon/IconLevel';
import { IconReload } from '../../../assets/icon/IconReload';
import { IconTime } from '../../../assets/icon/IconTime';
import { IconPeople } from '../../../assets/icon/IconPeople';
import { IconDistance } from '../../../assets/icon/IconDistance';
import { IconCalculator } from '../../../assets/icon/IconCalculator';
import { IconBall } from '../../../assets/icon/IconBall';
import { IconGoal } from '../../../assets/icon/IconGoal';
import { IconHandFan } from '../../../assets/icon/IconHandFan';

export const TrainingDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Box position="relative">
      <Image style={{ height: 250 }} source={route.params?.item?.image} />
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
        <Column space={4}>
          <Text color="primary.700" fontWeight="bold" fontSize="xl">
            {route.params?.item?.title}
          </Text>
          <Row flexWrap>
            <Row width="1/3" space={2} alignItems="center" height={30}>
              <IconLevel color="white" />
              <Text color="primary.200" size="md" height="100%" lineHeight={30}>
                {route.params?.item?.detail.level}
              </Text>
            </Row>
            <Row width="1/3" space={2} alignItems="center" height={30}>
              <IconReload color="white" />
              <Text color="primary.200" size="md" height="100%" lineHeight={30}>
                {route.params?.item?.detail.repeat}
              </Text>
            </Row>
            <Row width="1/3" space={2} alignItems="center" height={30}>
              <IconTime color="white" />
              <Text color="primary.200" size="md" height="100%" lineHeight={30}>
                {route.params?.item?.detail.time}
              </Text>
            </Row>
            <Row width="1/3" space={2} alignItems="center" height={30}>
              <IconPeople color="white" />
              <Text color="primary.200" size="md" height="100%" lineHeight={30}>
                {route.params?.item?.detail.age}
              </Text>
            </Row>
            <Row width="1/3" space={2} alignItems="center" height={30}>
              <IconDistance color="white" />
              <Text color="primary.200" size="md" height="100%" lineHeight={30}>
                {route.params?.item?.detail.distance}
              </Text>
            </Row>
            <Row width="1/3" space={2} alignItems="center" height={30}>
              <IconCalculator color="white" />
              <Text color="primary.200" size="md" height="100%" lineHeight={30}>
                {route.params?.item?.detail.kcal}
              </Text>
            </Row>
          </Row>
          <Heading fontSize="xl" color="primary.200" mt={2}>
            Cải thiện
          </Heading>
          <Row flexWrap space={2} alignItems="center">
            {route.params.item.detail.improve.map((item, index) => (
              <Box
                bg="primary.500"
                borderRadius="8px"
                px="12px"
                py="4px"
                mt={2}
              >
                <Text color="primary.200">{item}</Text>
              </Box>
            ))}
          </Row>
          <Heading fontSize="xl" color="primary.200" mt={2}>
            Chuẩn bị
          </Heading>
          <Row alignItems="center" space={8}>
            <Row alignItems="center" space={1}>
              <IconBall />
              <Text color="primary.200">
                x {route.params?.item.detail.prepare.ball}
              </Text>
            </Row>
            <Row alignItems="center" space={1}>
              <IconGoal />
              <Text color="primary.200">
                x {route.params?.item.detail.prepare.goal}
              </Text>
            </Row>
            <Row alignItems="center" space={1}>
              <IconHandFan />
              <Text color="primary.200">
                x {route.params?.item.detail.prepare.fan}
              </Text>
            </Row>
          </Row>
        </Column>
      </Box>
    </Box>
  );
};
