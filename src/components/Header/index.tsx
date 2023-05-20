import { Flex } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <Flex
      as="header"
      h="20"
      w="100%"
      maxWidth={1480}
      px="6"
      mx="auto"
      mt="4"
      align="center"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};
