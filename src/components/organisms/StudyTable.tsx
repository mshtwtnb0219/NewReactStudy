import { Table, } from "@chakra-ui/react"
import { StudyTableRow } from "./StudyTableRow"
import type { StudyRecord } from "../../types/StudyRecord"

export const StudyTable = () => {

    return (
        <>
            {/* 学習内容   学習時間   操作 */}
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
                        <StudyTableRow
                            key={record.id}
                            record={record}
                        />
                    ))}

                </Table.Body>
            </Table.Root>
        </>
    )
}

// ダミーデータ
const records: StudyRecord[] = [
    {
        id: 1,
        title: "国語",
        time: 1,
    },
    {
        id: 2,
        title: "数学",
        time: 2,
    },
    {
        id: 3,
        title: "英語",
        time: 3,
    },
]