import { components } from 'react-select'
export const SelectContainer = ({ children, ...props }) => {
    return (
        <components.SelectContainer {...props}>
            {children}
        </components.SelectContainer>
    );
};