import { Table, EditableText, EditableTextArea, EditableSelector } from '../../../../../../core/components'
import { tableClassNames } from '../../../../../../core/constants/tableClassNames'
import { topicsForMotions } from '../../../../../../core/constants/topicsForMotions'
import Select, { components } from 'react-select'
import { customTheme } from '../../../../../../core/constants/customTheme'
import { ValueContainer, MultiValueContainer, Placeholder, Option } from '../../../../../../core/components/SelectComponents'
import { useEffect, useState } from 'react'
export const TablePC = (props) => {
    const { updateMotion, del, motions, getDefaultTopic } = props
    const fifthColumnOptions = [
        { value: 'language', label: 'Language' },
        { value: 'division', label: 'Division' },
        { value: 'round', label: 'Round' },
        { value: 'link', label: 'Link' },
    ]
    const [fifthColumn, setFifthColumn] = useState('round')
    const fifthColumnSelectorStyles = {
        valueContainer: base => ({
            ...base,
            display: "flex",
            justifyContent: "center",
        }),
    }
    const topicSelectorStyles = {
        multiValue: base => ({
            ...base,
            fontSize: '0.7rem'
        }),
        placeholder: base => ({
            ...base,
            fontSize: '0.7rem'
        }),
        option: base => ({
            ...base,
            fontSize: '0.7rem'
        }),
    }
    const tableColumns = [
        {
            name: 'Content',
            width: '18%',
            render: (motion) => {
                return (
                    <EditableTextArea defaultValue={motion.content} onUpdate={(newValue) => { updateMotion('content', newValue, motion.id) }} style={{ fontSize: "0.7rem", padding: "0.4rem" }} />
                )
            }
        },
        {
            name: 'InfoSlide',
            width: '18%',
            render: (motion) => {
                return (
                    <EditableTextArea defaultValue={motion.infoSlide} onUpdate={(newValue) => { updateMotion('infoSlide', newValue, motion.id) }} style={{ fontSize: "0.7rem", padding: "0.4rem" }} />
                )
            }
        },
        {
            name: 'Tournament',
            width: '13%',
            render: (motion) => {
                return (
                    <EditableTextArea defaultValue={motion.tournamentID} onUpdate={(newValue) => { updateMotion('tournamentID', newValue, motion.id) }} style={{ textAlign: "center", fontSize: "0.7rem" }} />
                )
            }
        },
        {
            name: 'ID',
            width: '13%',
            render: (motion) => {
                return (
                    <div style={{ textAlign: "center", fontSize: "0.7rem" }}>{motion.id}</div>
                )
            }
        },
        {
            name: <Select className="fifthColumnSelector"
                theme={customTheme}
                options={fifthColumnOptions}
                onChange={(val) => { setFifthColumn(val.value) }}
                defaultValue={{ value: 'round', label: 'Round' }}
                components={{ ValueContainer }}
                styles={fifthColumnSelectorStyles}
            />,
            width: '12%',
            render: (motion) => {
                switch (fifthColumn) {
                    case 'language':
                        return (
                            <EditableText
                                style={{ textAlign: "center", fontSize: "0.7rem" }}
                                defaultValue={motion.language}
                                onUpdate={(newValue) => { updateMotion('language', newValue, motion.id) }} />
                        )
                    case 'division':
                        return (
                            <EditableText style={{ textAlign: "center", fontSize: "0.7rem" }} defaultValue={motion.division} onUpdate={(newValue) => { updateMotion('division', newValue, motion.id) }} />
                        )
                    case 'round':
                        return (
                            <EditableTextArea style={{ textAlign: "center", fontSize: "0.7rem" }} defaultValue={motion.round} onUpdate={(newValue) => { updateMotion('round', newValue, motion.id) }} />
                        )
                    case 'link':
                        return (
                            <EditableTextArea style={{ fontSize: "0.7rem" }} defaultValue={motion.link} onUpdate={(newValue) => { updateMotion('link', newValue, motion.id) }} />
                        )
                }
            },
        },
        {
            name: 'Topic',
            width: '24%',
            render: (motion) => {
                return (
                    <EditableSelector
                        defaultValue={motion.topic}
                        defaultSelectValue={getDefaultTopic(motion.topic)}
                        onUpdate={(newValue) => { updateMotion('topic', newValue, motion.id) }}
                        options={topicsForMotions}
                        multi={true}
                        placeholder="Select Topic"
                        components={{ MultiValueContainer, Placeholder, Option }}
                        styles={topicSelectorStyles}
                        style={{}}
                        isSearchable={true}
                    />
                )
            }
        },
        {
            type: "action",
            width: '2%',
            render: (motion) => {
                return (
                    <button className="removeMotionButton" onClick={() => { del(motion.id) }}>
                        <i className="fas fa-times"></i>
                    </button>
                )
            }
        }
    ]
    return (
        <Table
            columns={tableColumns}
            dataSource={motions}
            names={tableClassNames.adminLoadMotions}
            showActions={true}
        />
    )
}