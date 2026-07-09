import {
    Button,
    CloseButton,
    Dialog,
    FieldLabel,
    FieldRoot,
    Input,
    Portal,
    Stack,
} from "@chakra-ui/react";
import { useState, type ChangeEvent } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    onClickInsert: (title: string, time: string) => void;
};

export const StudyDialog = ({ open, onClose, onClickInsert }: Props) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onChangeTime = (e: ChangeEvent<HTMLInputElement>) => setTime(e.target.value);

    return (
        // {/* 登録編集画面 */ }
        <Dialog.Root
            open={open}
            onOpenChange={(e) => {
                if (!e.open) {
                    onClose();
                }
            }}
            motionPreset="slide-in-bottom"
        >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content pb={6}>
                        <Dialog.Header>
                            <Dialog.Title>新規登録</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body mx={4}>
                            <Stack gap={4}>
                                <FieldRoot>
                                    <FieldLabel>学習内容</FieldLabel>
                                    <Input value={title} onChange={onChangeTitle} />
                                    <FieldLabel>学習時間</FieldLabel>
                                    <Input value={time} onChange={onChangeTime} />
                                </FieldRoot>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            {/* <Button onClick={onClickUpdate}>登録</PrimaryButton> */}
                            <Button onClick={() => onClickInsert(title, time)}>登録</Button>
                            <Button onClick={onClose}>キャンセル</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
