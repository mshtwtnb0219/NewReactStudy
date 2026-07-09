import { useState } from "react"
import { Header } from "../components/molecules/Header"
import { StudyDialog } from "../components/organisms/StudyDialog"
import { StudyTable } from "../components/organisms/StudyTable"
import { MainLayOut } from "../templates/MainLayout"

export const StudyRecordPage = () => {

    // Dialogの起動状態
    const [open, setOpen] = useState(false);

    // データをもつ
    // 各コンポーネントを配置する
    return (
        <>
            <MainLayOut>
                <Header onClickOpen={() => setOpen(true)} />
                <StudyTable />
                <StudyDialog open={open} onClose={() => setOpen(false)} />
            </MainLayOut>


        </>
    )
}