import { Table, EditableTextArea } from '../../../../../../core/components'
import { tableClassNames } from '../../../../../../core/constants/tableClassNames'
export const TableTablet = (props) => {
    const {updateMotion, del, motions} = props
    return (
        <Table
            columns={[
                {
                    name: 'Content',
                    width: '37%',
                    render: (motion) => {
                        return (
                            <EditableTextArea defaultValue={motion.content} onUpdate={(newValue) => { updateMotion('content', newValue, motion.id) }} style={{ fontSize: "0.7rem", padding: "0.4rem" }} />
                        )
                    }
                },
                {
                    name: 'InfoSlide',
                    width: '37%',
                    render: (motion) => {
                        return (
                            <EditableTextArea defaultValue={motion.infoSlide} onUpdate={(newValue) => { updateMotion('infoSlide', newValue, motion.id) }} style={{ fontSize: "0.7rem", padding: "0.4rem" }} />
                        )
                    }
                },
                {
                    name: 'Tournament',
                    width: '22%',
                    render: (motion) => {
                        return (
                            <EditableTextArea defaultValue={motion.tournamentID} onUpdate={(newValue) => { updateMotion('tournamentID', newValue, motion.id) }} style={{ fontSize: "0.7rem", textAlign: 'center' }}/>
                        )
                    }
                },
                {
                    type: "action",
                    width: '4%',
                    render: (motion) => {
                        return (
                            <button className="removeMotionButton" onClick={() => { del(motion.id) }}>
                                <i className="fas fa-times" />
                            </button>
                        )
                    }
                }
            ]}
            dataSource={motions}
            names={tableClassNames.adminLoadMotions}
            showActions={true}
        />
    )
}