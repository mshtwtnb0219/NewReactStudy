import { Button, Table } from "@chakra-ui/react";
import type { StudyRecord } from "../../types/StudyRecord";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type Props = {
  record: StudyRecord;
  deleteRecord: (id: number) => void;
  onClickEdit: (record: StudyRecord) => void;
};

export const StudyTableRow = (props: Props) => {
  const { record, deleteRecord, onClickEdit } = props;
  return (
    // {/* React 2時間 編集 削除 */ }
    //     {/* 1行だけ担当する */ }
    <Table.Row key={record.id}>
      <Table.Cell>{record.title}</Table.Cell>
      <Table.Cell>{record.time}時間</Table.Cell>
      <Table.Cell textAlign="center">
        <Button size="xs" colorPalette="cyan" onClick={() => onClickEdit(record)} >
          編集<FaRegEdit />
        </Button>
        <Button size="xs" colorPalette="red" onClick={() => { deleteRecord(record.id) }}>
          削除<MdDelete />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};
