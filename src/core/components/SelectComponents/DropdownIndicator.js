import { components } from 'react-select'
export const DropdownIndicator = ({ children, ...props }) => {
    return (
        <components.DropdownIndicator {...props}>
            {children}
        </components.DropdownIndicator>
    );
};