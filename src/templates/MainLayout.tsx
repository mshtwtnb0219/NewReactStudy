import { Container } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const MainLayOut = ({ children }: Props) => {
  return (
    <>
      {/* レイアウトだけを担当する */}
      <Container maxW="800px" py={8}>
        {children}
      </Container>
    </>
  );
};
