import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export const NavLink = ({ children, icon, href, ...rest }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};
