import userEvent from "@testing-library/user-event"
import { renderWithProvider } from "../../test/render"
import type { StudyRecord } from "../../types/StudyRecord"
import { StudyDialog } from "./StudyDialog"
import { screen, waitFor } from "@testing-library/react";

describe('StudyDialog.test.tsxのテスト', () => {
    test('新規登録タイトルが表示される', () => {
        renderWithProvider(
            <StudyDialog
                open={true}
                record={null}
                onClose={vi.fn()}
                onClickInsert={vi.fn()}
                onClickUpdate={vi.fn()} />
        )

        expect(screen.getByText('新規登録')).toBeInTheDocument();
    })

    test('編集タイトルが表示される', () => {
        renderWithProvider(
            <StudyDialog
                open={true}
                record={record}
                onClose={vi.fn()}
                onClickInsert={vi.fn()}
                onClickUpdate={vi.fn()} />
        )

        expect(screen.getByText('編集')).toBeInTheDocument();
    })
})

// だみー
const record: StudyRecord = {
    id: 1,
    title: "React",
    time: 2,
};