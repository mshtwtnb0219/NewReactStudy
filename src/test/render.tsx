import { render } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";


// vitest用
export const renderWithProvider = (ui: React.ReactNode) => {
    return render(
        <ChakraProvider value={defaultSystem}>
            {ui}
        </ChakraProvider>
    );
};