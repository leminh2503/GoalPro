import React from 'react';
import { Box, Text } from 'native-base';

export const Error = ({ message }: { message: string }) => {
  return (
    <Box bg="primary.700" px="2" py="1" rounded="sm" mb={5}>
      <Text color="primary.200">{message}</Text>
    </Box>
  );
};
