import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "@/contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="open navigation"
          mr="2"
          mt="2"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
