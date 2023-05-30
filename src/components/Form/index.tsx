import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
      <FormLabel>
        {label}
        <ChakraInput
          ref={ref}
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

export const Input = forwardRef(InputBase);
