import { components } from 'react-select'
export const ValueContainer = ({ children, ...props }) => (
    <components.ValueContainer {...props}>{children}</components.ValueContainer>
);