import {$host} from "./index";

export const createRow = async (row) => {
    const {data} = await $host.post('api/table', row)
    return data
}
export const fetchRows = async () => {
    const {data} = await $host.get('api/table')
    return data
}
export const deleteRow = async (rowId) => {
    const {data} = await $host.delete('api/table/' + rowId)
    return data
}