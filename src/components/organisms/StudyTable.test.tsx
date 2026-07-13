import { screen } from "@testing-library/react";
import { renderWithProvider } from "../../test/render";
import type { StudyRecord } from "../../types/StudyRecord";
import { StudyTable } from "./StudyTable";

describe('StudyTable.test.tsxのテスト', () => {
    test('レコードが表示される', () => {
        renderWithProvider(
            <StudyTable
                records={records}
                loading={false}
                deleteRecord={vi.fn()}
                onClickEdit={vi.fn()} />)

        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('Java')).toBeInTheDocument()
    })

    test('レコード数分Rowが表示される', () => {
        renderWithProvider(
            <StudyTable
                records={records}
                loading={false}
                deleteRecord={vi.fn()}
                onClickEdit={vi.fn()} />)

        expect(screen.getAllByRole("row")).toHaveLength(3);
    })

    test('編集ボタンが表示される', () => {
        renderWithProvider(
            <StudyTable
                records={records}
                loading={false}
                deleteRecord={vi.fn()}
                onClickEdit={vi.fn()} />)

        expect(
            screen.getAllByRole("button", { name: "編集" })
        ).toHaveLength(2);
    })


    test('削除ボタンが表示される', () => {
        renderWithProvider(
            <StudyTable
                records={records}
                loading={false}
                deleteRecord={vi.fn()}
                onClickEdit={vi.fn()} />)

        expect(
            screen.getAllByRole("button", { name: "削除" })
        ).toHaveLength(2);
    })

})



// テストデータの準備
const records: StudyRecord[] = [
    {
        id: 1,
        title: "React",
        time: 2,
    },
    {
        id: 2,
        title: "Java",
        time: 3,
    },
];