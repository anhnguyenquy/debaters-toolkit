import { Table } from '../../../../../../components/Table'
import { EditableText } from '../../../../../../components'
import { tableClassNames } from '../../../../../../helpers/data/tableClassNames'
export const TablePhone = (props) => {
    const { updateTournament, del, tournaments } = props
    return (
        <Table
            columns={[
                {
                    name: 'Name',
                    width: '46%', //width of each column
                    render: (tournament) => {
                        return (
                            <EditableText defaultValue={tournament.name} onUpdate={(newValue) => { updateTournament('name', newValue, tournament.id) }} />
                        )
                    }
                },
                {
                    name: 'Year',
                    width: '10%',
                    render: (tournament) => {
                        return (
                            <EditableText style={{ textAlign: "center" }}
                                defaultValue={tournament.year}
                                onUpdate={(newValue) => { updateTournament('year', newValue, tournament.id) }} />
                        )
                    }
                },
                {
                    name: 'Format',
                    width: '10%',
                    render: (tournament) => {
                        return (
                            <EditableText style={{ textAlign: "center" }}
                                defaultValue={tournament.format}
                                onUpdate={(newValue) => { updateTournament('format', newValue, tournament.id) }} />
                        )
                    }
                },
                {
                    name: 'ID',
                    width: '30%',
                    render: (tournament) => {
                        return (
                            <div style={{ textAlign: "center" }}>{tournament.id}</div>
                        )
                    }
                },
                {
                    type: "action",
                    width: '4%',
                    render: (tournament) => {
                        return (
                            <button className="removeTournamentButton" onClick={() => { del(tournament.id) }}>
                                <i className="fas fa-times"></i>
                            </button>
                        )
                    }
                }
            ]}
            dataSource={tournaments}
            names={tableClassNames.adminLoadTournaments}
            showActions={true}
        />
    )
}