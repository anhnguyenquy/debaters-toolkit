import { components } from 'react-select'
export const IndicatorsContainer = props => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "0.5rem",
        }}>
            <components.IndicatorsContainer {...props} />
        </div>
    )
}