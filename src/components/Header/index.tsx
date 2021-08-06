import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from './Logo';
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Profile } from "./Profile";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return(
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {
        !isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          />
        )
      }
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
