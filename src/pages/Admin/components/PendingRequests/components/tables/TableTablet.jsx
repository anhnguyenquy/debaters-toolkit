import { Table, EditableText, EditableTextArea, EditableSelector } from '../../../../../../components'
import { tableClassNames } from '../../../../../../helpers/data/tableClassNames'
import { topics } from '../../../../../../helpers/data/topics'
import { formats } from '../../../../../../helpers/data/formats'
import Select, { components } from 'react-select'
import { customTheme } from '../../../../../../helpers/data/customTheme'
import { useState } from 'react'
export const TableTablet = (props) => {
    const {updateRequest, getDefaultFormat, getDefaultTopic, addToDatabase, del, requests} = props
    const thirdColumnOptions = [
        { value: 'name', label: 'Tournament\'s name' },
        { value: 'topic', label: "Topic" },
        { value: 'language', label: 'Language' },
        { value: 'year', label: 'Year' },
        { value: 'round', label: 'Round' },
        { value: 'format', label: 'Format' },
        { value: 'link', label: 'Link' },
    ]
    const [thirdColumn, setThirdColumn] = useState('name')

    const ValueContainer = ({ children, ...props }) => (
        <components.ValueContainer {...props}>{children}</components.ValueContainer>
    );
    const thirdColumnSelectorStyles = {
        valueContainer: base => ({
            ...base,
            display: "flex",
            justifyContent: "center",
        }),
    }
    return (
        <Table
            columns={[
                {
                    name: 'Motion',
                    width: '22%', //25
                    render: (request) => {
                        return (
                            <EditableTextArea style={{ fontSize: "0.8rem" }} defaultValue={request.motion} onUpdate={(newValue) => { updateRequest('motion', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: 'InfoSlide',
                    width: '27%', //30
                    render: (request) => {
                        return (
                            <EditableTextArea style={{ fontSize: "0.8rem" }} defaultValue={request.infoSlide} onUpdate={(newValue) => { updateRequest('infoSlide', newValue, request.id) }} />
                        )
                    }
                },
                {
                    name: <Select className="thirdColumnSelector"
                        theme={customTheme}
                        options={thirdColumnOptions}
                        onChange={(val) => { setThirdColumn(val.value) }}
                        defaultValue={{ value: 'name', label: 'Tournament\'s name' }}
                        components={{ ValueContainer }}
                        styles={thirdColumnSelectorStyles}
                    />,
                    width: '44%', //38
                    render: (request) => {
                        switch (thirdColumn) {
                            case 'name':
                                return (
                                    <EditableText
                                        style={{ textAlign: "center", fontSize: "0.8rem" }}
                                        defaultValue={request.tournamentName}
                                        onUpdate={(newValue) => { updateRequest('tournamentName', newValue, request.id) }} />
                                )
                                break
                            case 'language':
                                return (
                                    <EditableText
                                        style={{ textAlign: "center", fontSize: "0.8rem" }}
                                        defaultValue={request.language}
                                        onUpdate={(newValue) => { updateRequest('language', newValue, request.id) }} />
                                )
                                break
                            case 'year':
                                return (
                                    <EditableText
                                        style={{ textAlign: "center", fontSize: "0.8rem" }}
                                        defaultValue={request.year}
                                        onUpdate={(newValue) => { updateRequest('year', newValue, request.id) }} />
                                )
                                break
                            case 'round':
                                return (
                                    <EditableTextArea
                                        style={{ textAlign: "center", fontSize: "0.8rem" }}
                                        defaultValue={request.round}
                                        onUpdate={(newValue) => { updateRequest('round', newValue, request.id) }} />
                                )
                                break
                            case 'format':
                                return (
                                    <EditableSelector
                                        defaultValue={request.format}
                                        defaultSelectValue={getDefaultFormat(request.format)}
                                        onUpdate={(newValue) => { updateRequest('format', newValue, request.id) }}
                                        style={{ fontSize: "0.6rem" }}
                                        options={formats}
                                        multi={false}
                                    />
                                )
                                break
                            case 'link':
                                return (
                                    <EditableTextArea
                                        style={{ textAlign: "center", fontSize: "0.8rem" }}
                                        defaultValue={request.link}
                                        onUpdate={(newValue) => { updateRequest('link', newValue, request.id) }} />
                                )
                                break
                            case 'topic':
                                return (
                                    <EditableSelector
                                        defaultValue={request.topic}
                                        defaultSelectValue={getDefaultTopic(request.topic)}
                                        onUpdate={(newValue) => { updateRequest('topic', newValue, request.id) }}
                                        options={topics}
                                        multi={true}
                                    />
                                )
                                break
                        }
                    },
                },
                {
                    type: "action",
                    width: '7%',
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