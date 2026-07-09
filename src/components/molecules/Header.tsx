import { Button, Flex, Heading } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

type Props = {
  onClickOpen: () => void;
};

export const Header = ({ onClickOpen }: Props) => {
  return (
    <>
      {/* 学習記録                
                   [新規登録] */}
      <Flex gap={4} direction="column" py={8}>
        <Heading size="3xl" letterSpacing="tight" textAlign="center">
          シン・学習記録アプリ
        </Heading>
        <Flex justify="flex-end">
          <Button colorPalette="cyan" size="sm" onClick={onClickOpen}>
            新規登録
            <LuArrowRight />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
