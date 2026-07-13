import { screen } from "@testing-library/react"
import { Header } from "./Header"
import { renderWithProvider } from "../../test/render"
import userEvent from "@testing-library/user-event";

describe('Header.test.tsxのテスト', () => {
    test('タイトルが表示されること', () => {
        // vi.fn() ダミー関数
        renderWithProvider(<Header onClickOpen={vi.fn()} />)
        expect(screen.getByText('シン・学習記録アプリ')).toBeInTheDocument();
    })

    test('新規登録ボタンが表示されること', () => {
        // vi.fn() ダミー関数
        renderWithProvider(<Header onClickOpen={vi.fn()} />)
        expect(screen.getByRole('button', { name: '新規登録' })).toBeInTheDocument();
    })

    test('新規登録ボタン押下でイベントが呼ばれること', async () => {
        // vi.fn() ダミー関数
        const onClickOpen = vi.fn();
        renderWithProvider(<Header onClickOpen={onClickOpen} />)

        // userEvent.clickは非同期
        await userEvent.click(
            screen.getByRole('button', { name: '新規登録' })
        );
        // fnが呼ばれた関数を記録する
        expect(onClickOpen).toHaveBeenCalledTimes(1);
    })
})