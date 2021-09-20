import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: ${({ narrow, wide }) =>
    narrow ? '815' : wide ? '1450' : '1240'}px;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const Container = ({ narrow, wide, children, ...props }) => (
    <StyledContainer narrow={narrow} wide={wide} {...props}>
        {children}
    </StyledContainer>
);