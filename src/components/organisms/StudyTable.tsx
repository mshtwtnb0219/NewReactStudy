import { Spinner, Table } from "@chakra-ui/react";
import { StudyTableRow } from "./StudyTableRow";
import type { StudyRecord } from "../../types/StudyRecord";

type Props = {
  records: Array<StudyRecord>;
  loading: boolean;
  deleteRecord: (id: number) => void;
}


export const StudyTable = ({ records, loading, deleteRecord }: Props) => {
  return (
    <>
      {/* 学習内容   学習時間   操作 */}
      {loading ?
        (<Spinner
          size="md"
          color="colorPalette.600"
          colorPalette="orange"
        />

        ) : (
          <Table.Root size="md" striped>
            <Table.Caption />
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>学習内容</Table.ColumnHeader>
                <Table.ColumnHeader>学習時間</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="center">操作</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {records.map((record) => (
                <StudyTableRow key={record.id} record={record} deleteRecord={deleteRecord} />
              ))}
            </Table.Body>
          </Table.Root>

        )}

    </>
  );
};