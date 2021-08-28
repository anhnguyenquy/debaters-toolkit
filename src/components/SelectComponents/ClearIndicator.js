import { components } from 'react-select'
export const ClearIndicator = ({ children, ...props }) => {
    return (
        <components.ClearIndicator {...props}>
            {children}
        </components.ClearIndicator>
    );
};