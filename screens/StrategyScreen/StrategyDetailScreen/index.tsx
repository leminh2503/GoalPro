import React from 'react';
import { Box, Heading, Image, Pressable, ScrollView, Text } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconBack } from '../../../assets/icon/IconBack';

export const StrategyDetailScreen = () => {
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
        <Text mt={4} color="primary.200">
          Lorem ipsum dolor sit amet consectetur. Senectus ac magna egestas sit
          lobortis. Ultrices augue sit dictumst volutpat nullam. Semper ac
          tristique gravida leo. Dui mauris mattis viverra bibendum eros amet.
          Turpis ultricies a cum pellentesque suspendisse porta ipsum est. Elit
          facilisis maecenas lorem enim dictumst. Ligula rhoncus imperdiet orci
          sed libero tincidunt. Vel sit eros purus blandit semper ut nunc. Eget
          eget integer morbi iaculis sollicitudin lobortis magna. Elementum nibh
          scelerisque ipsum lacus porttitor integer mauris nunc eu. Velit
          pharetra id morbi semper diam sed nunc. Molestie elit amet habitasse
          quis diam eget hac ultricies arcu. Molestie aenean in urna est
          convallis iaculis leo ultricies ipsum. Ultrices tempus massa enim quam
          ornare a mattis. Semper porta nulla enim aliquet ante risus etiam amet
          quis. Ut imperdiet gravida phasellus id. Posuere tortor nec suscipit
          nec facilisis ac. Nullam adipiscing vitae egestas massa leo dolor duis
          mauris. Quis ante in amet enim feugiat phasellus ac. Non feugiat morbi
          quis est. Lectus arcu lacinia vulputate urna. Amet leo et purus id et
          rhoncus a. Id habitant ullamcorper sed sem. Amet faucibus in dignissim
          egestas blandit id gravida pulvinar. Eu libero luctus faucibus cras in
          tortor amet auctor feugiat. Pellentesque nec in viverra lacus.
          Pharetra commodo amet at faucibus ut quam tincidunt enim ac. A turpis
          eros nunc tincidunt velit ac. Praesent sed scelerisque ultricies sit
          ipsum pharetra aliquam habitant. Eget ultrices congue in aliquet
          volutpat velit ridiculus quis.
        </Text>
      </Box>
    </ScrollView>
  );
};
