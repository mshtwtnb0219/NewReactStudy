import { Button, CloseButton, Dialog, FieldLabel, FieldRoot, Input, Portal, Stack } from "@chakra-ui/react"


type Props = {
    open: boolean;
    onClose: () => void;
}


export const StudyDialog = ({ open, onClose }: Props) => {
    return (
        // {/* 登録編集画面 */ }
        < Dialog.Root
            open={open}
            onOpenChange={(e) => {
                if (!e.open) {
                    onClose();
                }
            }} motionPreset="slide-in-bottom" >
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
                                    {/* <Input value={name} readOnly={!isAdmin} onChange={onChangeName} /> */}
                                    <Input />
                                    <FieldLabel>学習時間</FieldLabel>
                                    <Input />
                                    {/* <Input value={username} readOnly={!isAdmin} onChange={onChangeUserName} /> */}
                                </FieldRoot>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            {/* <Button onClick={onClickUpdate}>登録</PrimaryButton> */}
                            <Button>登録</Button>
                            <Button onClick={onClose}>キャンセル</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root >

    )
}