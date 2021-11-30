import { Table, EditableText, EditableTextArea, EditableSelector } from '../../../../../../core/components'
import { tableClassNames } from '../../../../../../core/constants/tableClassNames'
import { topics } from '../../../../../../core/constants/topics'
import { formats } from '../../../../../../core/constants/formats'
export const TablePC = (props) => {
    const { updateRequest, del, requests, getDefaultFormat, getDefaultTopic, addToDatabase } = props
    return (
        <Table
            columns={[
                {
                    name: 'Motion',
                    width: '13%',
                    render: (request) => {
                        return (
                            <EditableTextArea style={{ fontSize: "0.7rem" }} defaultValue={request.motion} onUpdate={(newValue) => { updateRequest('motion', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: 'InfoSlide',
                    width: '13%',
                    render: (request) => {
                        return (
                            <EditableTextArea style={{ fontSize: "0.7rem" }} defaultValue={request.infoSlide} onUpdate={(newValue) => { updateRequest('infoSlide', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: 'Topic',
                    width: '25%',
                    render: (request) => {
                        return (
                            <EditableSelector
                                defaultValue={request.topic}
                                defaultSelectValue={getDefaultTopic(request.topic)}
                                onUpdate={(newValue) => { updateRequest('topic', newValue, request.id) }}
                                options={topics}
                                multi={true}
                            />
                        )
                    }
                },
                {
                    name: 'Language',
                    width: '7%',
                    render: (request) => {
                        return (
                            <EditableText
                                style={{ textAlign: "center", fontSize: "0.7rem" }}
                                defaultValue={request.language}
                                onUpdate={(newValue) => { updateRequest('language', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: 'Tournament',
                    width: '9%',
                    render: (request) => {
                        return (
                            <EditableText
                                style={{ textAlign: "center", fontSize: "0.7rem" }}
                                defaultValue={request.tournamentName}
                                onUpdate={(newValue) => { updateRequest('tournamentName', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: 'Year',
                    width: '5%',
                    render: (request) => {
                        return (
                            <EditableText
                                style={{ textAlign: "center", fontSize: "0.7rem" }}
                                defaultValue={request.year}
                                onUpdate={(newValue) => { updateRequest('year', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: 'Round',
                    width: '5%',
                    render: (request) => {
                        return (
                            <EditableTextArea
                                style={{ textAlign: "center", fontSize: "0.7rem" }}
                                defaultValue={request.round}
                                onUpdate={(newValue) => { updateRequest('round', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: 'Format',
                    width: '12%',
                    render: (request) => {
                        return (
                            <EditableSelector
                                defaultValue={request.format}
                                defaultSelectValue={getDefaultFormat(request.format)}
                                onUpdate={(newValue) => { updateRequest('format', newValue, request.id) }}
                                options={formats}
                                multi={false}
                            />
                        )
                    }
                },
                {
                    name: 'Link',
                    width: '6%',
                    render: (request) => {
                        return (
                            <EditableTextArea
                                style={{ textAlign: "center", fontSize: "0.7rem" }}
                                defaultValue={request.link}
                                onUpdate={(newValue) => { updateRequest('link', newValue, request.id) }} />
                        )
                    }
                },
                {
                    type: "action",
                    width: '5%',
                    render: (request) => {
                        return (
                            <div className="actionIcons">
                                <button onClick={() => { addToDatabase(request) }}><i className="fas fa-check actionIcon tick"></i></button>
                                <button onClick={() => { del(request.id) }}><i className="fas fa-times actionIcon cross"></i></button>
                            </div>
                        )
                    }
                }

            ]}
            dataSource={requests}
            names={tableClassNames.adminPendingRequests}
            showActions={true}
        />
    )
}