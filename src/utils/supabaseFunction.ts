import { supabase } from "./supabase";

// データ取得(全件)
export const getAllRecords = async () => {
  const records = await supabase.from("study-record").select("*");
  return records;
};

// データの登録
export const insertRecord = async (title: string, time: number) => {
  const { error } = await supabase.from("study-record").insert([
    {
      title,
      time,
    },
  ]);

  if (error) {
    console.error(error);
    return;
  }
};

// データの削除
export const deleteRecord = async (index: number) => {
  const { error } = await supabase
    .from("study-record")
    .delete()
    .eq("id", index);
  if (error) {
    console.error(error);
  }
};
