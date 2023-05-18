import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>
        {label}
        <ChakraInput
          name={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          size="lg"
          _hover={{
            bgColor: "gray.900",
          }}
          {...rest}
        />
      </FormLabel>
    </FormControl>
  );
};
