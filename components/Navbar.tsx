import React from "react";
import Link from "next/link";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "@choc-ui/logo";

export default function App() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Logo />
              <VisuallyHidden>Scrappy</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Scraapy
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href='/amazon' passHref>
                <Button variant="ghost">Amazon Scrapper</Button>
              </Link>
              <Link href='alie'passHref>
                <Button variant="ghost">Alie Scrapper</Button>
              </Link>
              <Link href='tiktok'passHref>
                <Button variant="ghost">Tik Tok Scrapper</Button>
              </Link>
              <Link href='company' passHref>
                <Button variant="ghost">Company</Button>
              </Link>
              <Link href='signin' passHref>
                <Button variant="ghost">Sign in</Button>
              </Link>
            </HStack>
            <Link href='signup' passHref>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            </Link>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link href='amazon' passHref>
                <Button w="full" variant="ghost">
                  Amazon Scrapper
                </Button>
                </Link>
                <Link href='alie' passHref>
                <Button w="full" variant="ghost">
                  Alie Scrapper
                </Button>
                </Link>
                <Link href='tiktok' passHref>
                <Button w="full" variant="ghost">
                  TikTok scrapper
                </Button>
                </Link>
                <Link href='company' passHref>
                <Button w="full" variant="ghost">
                  Company
                </Button>    
                </Link>
                <Link href='signin' passHref>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}


