import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Camila Miz</Text>
        <Text color="gray.300" fontSize="small">
          camila@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Camila Miz" src="https://www.github.com/camilamiz.png"/>
    </Flex>
  );
}
