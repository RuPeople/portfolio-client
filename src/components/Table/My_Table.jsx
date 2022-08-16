import {Table} from "react-bootstrap";

import React, {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import TableInput from "./TableInput/TableInput";
import TableRow from "./TableRow/TableRow";
import {Context} from "../../index";
import {fetchRows} from "../../http/tableAPI";

import "./My_Table.css"

const My_Table = observer(() => {
    const {rows} = useContext(Context)

    const lastRowIndex = rows.currentPage * rows.rowsPerPage
    const firstRowIndex = lastRowIndex - rows.rowsPerPage
    const currentRows = rows.sortedRows.slice(firstRowIndex, lastRowIndex)

    useEffect(() => {
        fetchRows().then(data => {
            rows.setRows(data)
            const sorted = [...rows.rows].sort((a,b) => a["col_name"] > b["col_name"] ? 1:-1)
            rows.setSortedRows(sorted)
        })
    },[])

//сортировка по колонкам
    const [order, setOrder] = useState("ASC")
    const sortByColumn = (column) => {
        if (column === "col_name") {
            //сортировка для string
            if (order === "ASC") {
                const sorted = [...rows.sortedRows].sort((a,b) => a[column].toLowerCase() > b[column].toLowerCase() ? 1:-1)
                rows.setSortedRows(sorted)
                setOrder("DSC")
            }
            if (order === "DSC") {
                const sorted = [...rows.sortedRows].sort((a,b) => a[column].toLowerCase() < b[column].toLowerCase() ? 1:-1)
                rows.setSortedRows(sorted)
                setOrder("ASC")
            }
        }
        else {
            //сортировка для number
            if (order === "ASC") {
                const sorted = [...rows.sortedRows].sort((a,b) => a[column] - b[column])
                rows.setSortedRows(sorted)
                setOrder("DSC")
            }
            if (order === "DSC") {
                const sorted = [...rows.sortedRows].sort((a,b) => b[column] - a[column])
                rows.setSortedRows(sorted)
                setOrder("ASC")
            }
        }
    }

    //пагинация
    const paginate = pageNumber => rows.setCurrentPage(pageNumber)

    return (
            <div>
                <TableInput/>
                <Table className="my-auto" striped bordered hover>
                    <thead>
                    <tr>
                        <th style={{width:"23%"}} onClick={() => sortByColumn("col_name")}>
                            Date
                        </th>
                        <th style={{cursor: "pointer", width:"23%"}} onClick={() => sortByColumn("col_count")}>
                            Name
                        </th>
                        <th style={{cursor: "pointer", width:"23%"}} onClick={() => sortByColumn("col_distance")}>
                            Count
                        </th>
                        <th style={{cursor: "pointer", width:"23%"}}>
                            Distance
                        </th>
                        <th className="d-flex flex-row justify-content-center align-items-center h-100">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-trash" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd"
                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <TableRow currentRows={currentRows} />
                    </tbody>
                </Table>
            </div>
    );
});

export default My_Table;