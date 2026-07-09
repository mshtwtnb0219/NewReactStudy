import { Button, Table } from "@chakra-ui/react";
import type { StudyRecord } from "../../types/StudyRecord";

type Props = {
  record: StudyRecord;
};

export const StudyTableRow = (props: Props) => {
  const { record } = props;
  return (
    // {/* React 2時間 編集 削除 */ }
    //     {/* 1行だけ担当する */ }
    <Table.Row key={record.id}>
      <Table.Cell>{record.title}</Table.Cell>
      <Table.Cell>{record.time}時間</Table.Cell>
      <Table.Cell textAlign="center">
        <Button size="xs" colorPalette="blue">
          編集
        </Button>
        <Button size="xs" colorPalette="red">
          削除
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};
