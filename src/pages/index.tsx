import { Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex
      w="100wh"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
