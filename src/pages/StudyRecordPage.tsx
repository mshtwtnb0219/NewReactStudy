import { useEffect, useState } from "react";
import { Header } from "../components/molecules/Header";
import { StudyDialog } from "../components/organisms/StudyDialog";
import { StudyTable } from "../components/organisms/StudyTable";
import { MainLayOut } from "../templates/MainLayout";
import { deleteRecord, getAllRecords, insertRecord } from "../utils/supabaseFunction";
import type { StudyRecord } from "../types/StudyRecord";
import { useMessage } from "../hocks/useMessage";
import { Toaster } from "../components/ui/toaster";

export const StudyRecordPage = () => {
  // Dialogの起動状態
  const [open, setOpen] = useState(false);
  const [records, setRecords] = useState<Array<StudyRecord> | []>([]);
  // データ読み込み時の制御フラグ
  const [loading, setLoading] = useState(true);
  const { showMessage } = useMessage();

  // recordの登録
  const onClickInsert = async (title: string, time: number) => {
    try {
      await insertRecord(title, time);
      showMessage({ title: 'データ登録完了', status: 'success' });
      await getRecords();
    } catch (e) {
      showMessage({ title: `ユーザー取得に失敗しました。${e}`, status: "error" })
    }
  };

  // データの取得
  const getRecords = async () => {
    try {
      setLoading(true);
      const records = await getAllRecords();
      setRecords(records.data ?? []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  // データの削除
  const delRecord = async (id: number) => {
    try {
      setLoading(true);
      await deleteRecord(id);
      const records = await getAllRecords();
      setRecords(records.data ?? []);
      showMessage({ title: `削除しました。`, status: "success" })
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecords();
  }, [])

  // データをもつ
  // 各コンポーネントを配置する
  return (
    <>
      <Toaster />
      <MainLayOut>
        <Header onClickOpen={() => setOpen(true)} />
        <StudyTable records={records} loading={loading} deleteRecord={delRecord} />
        <StudyDialog
          open={open}
          onClose={() => setOpen(false)}
          onClickInsert={onClickInsert}
        />
      </MainLayOut>
    </>
  );
};
