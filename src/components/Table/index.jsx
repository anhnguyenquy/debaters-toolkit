export const Table = (props) => {
    const { dataSource, columns, showActions, names, ref } = props
    return (
        <>
            {
                dataSource.length != 0 ?
                    <table className={names.tableName} ref={ref}>
                        <tr className={names.headerName}>
                            {
                                columns.map(columnItem => {
                                    if (columnItem.type != "action") {
                                        return (
                                            <th className={names.headerCellName} style={{
                                                width: columnItem.width
                                            }}>{columnItem.name}</th>
                                        )
                                    }
                                })
                            }
                            {
                                showActions && <th width={columns[columns.length - 1].width} className={names.emptyHeaderCellName}></th>
                            }
                        </tr>
                        {
                            dataSource.map(item => {
                                return (
                                    <tr className={names.rowName}>
                                        {
                                            columns.map(columnItem => {
                                                return (
                                                    <td style={{
                                                        width: columnItem.width
                                                    }} className={`${names.rowCellName} ${columnItem.type == "action" ? `${names.actionCellName}` : ""}`}>{columnItem.render(item)}</td>
                                                )
                                            })
                                        }
                                    </tr>

                                )
                            })
                        }
                    </table>
                    : <></>
            }
        </>
    )
}