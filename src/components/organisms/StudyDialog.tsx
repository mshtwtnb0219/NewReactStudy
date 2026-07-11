import {
    Button,
    CloseButton,
    Dialog,
    Field,
    FieldLabel,
    FieldRoot,
    Input,
    Portal,
    Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import type { StudyRecord } from "../../types/StudyRecord";
import { useEffect } from "react";

type Props = {
    open: boolean;
    record: StudyRecord | null;
    onClose: () => void;
    onClickInsert: (title: string, time: number) => Promise<void>;
    onClickUpdate: (id: number, title: string, time: number) => Promise<void>;
};

type FormValues = {
    title: string;
    time: number;
}

export const StudyDialog = ({ open, onClose, onClickInsert, record, onClickUpdate }: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const handleSave = async (data: FormValues) => {
        if (record) {
            await onClickUpdate(record.id, data.title, data.time);
        } else {
            await onClickInsert(data.title, data.time);
        }
        handleClose();
    }
    const handleClose = () => {
        reset();
        onClose();
    }

    useEffect(() => {
        console.log("格納されているかの確認")
        console.log(record)
        if (record) {
            reset({
                title: record.title,
                time: record.time,
            });
        } else {
            reset({
                title: "",
                time: 0,
            });
        }
    }, [record, reset]);

    return (
        // {/* 登録編集画面 */ }
        <Dialog.Root
            open={open}
            onOpenChange={(e) => {
                if (!e.open) {
                    handleClose();
                }
            }}
            motionPreset="slide-in-bottom"
        >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content pb={6}>
                        <Dialog.Header>
                            <Dialog.Title>{record ? '編集' : '新規登録'}</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body mx={4}>
                            <Stack gap={4}>
                                <FieldRoot invalid={!!errors.title}>
                                    <FieldLabel>学習内容</FieldLabel>
                                    {/* <Input value={title} onChange={onChangeTitle} /> */}
                                    <Input {...register("title", {
                                        required: "学習内容を入力してください",
                                    })} />
                                    <Field.ErrorText>
                                        {errors.title?.message}
                                    </Field.ErrorText>
                                </FieldRoot>
                                <FieldRoot invalid={!!errors.time}>
                                    <FieldLabel>学習時間</FieldLabel>
                                    {/* <Input value={time} onChange={onChangeTime} /> */}
                                    <Input type="number" {...register("time", {
                                        required: "学習時間を入力してください",
                                        valueAsNumber: true,
                                        min: {
                                            value: 1,
                                            message: "1時間以上入力してください"
                                        },

                                    })} />
                                    <Field.ErrorText>
                                        {errors.time?.message}
                                    </Field.ErrorText>
                                </FieldRoot>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            {/* <Button onClick={onClickUpdate}>登録</PrimaryButton> */}
                            <Button onClick={handleSubmit(handleSave)}>{record ? '更新' : '登録'}</Button>
                            <Button onClick={handleClose}>キャンセル</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root >
    );
};
