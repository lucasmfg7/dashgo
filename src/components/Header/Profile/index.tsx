import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Fernandes</Text>
        <Text color="gray.300" fontSize="small">
          lmfernandes794@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Lucas Fernandes"
        src="https://github.com/lucasmfg7.png"
      />
    </Flex>
  );
};
