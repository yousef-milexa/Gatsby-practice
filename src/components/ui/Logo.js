import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import {
    minBreakpointQuery,
    maxBreakpointQuery,
    standardColours,
    brandColours,
    zIndexLayers,
    standardTransition,
} from '../../styles';
import { Svg } from '../ui';
import logo from '../../images/assets/logo.svg';

const StyledLogo = styled.a`
    position: relative;
    display: inline-block;
    ${({ displayNav }) => {
        if (displayNav) {
        return css`
            ${maxBreakpointQuery.mlarge`
            z-index: ${zIndexLayers.fifth};
            background-color: ${brandColours.neutral[500]};
            `}
        `;
        }
    }};
`;

const StyledSvg = styled(Svg)`
    transition: ${standardTransition('fill')};
    ${maxBreakpointQuery.mlarge`
        path {
            fill: ${({ displayNav, alt }) =>
            displayNav || alt ? standardColours.white : brandColours.neutral[500]};
        };
    `}
    ${minBreakpointQuery.mlarge`
        path {
            fill: ${({ alt }) =>
            alt ? standardColours.white : brandColours.neutral[500]};
        };
    `}
`;

const Logo = ({ displayNav, alt }) => {
    const {
        datoCmsSite: {
        globalSeo: { siteName },
        },
    } = useStaticQuery(graphql`
        query LogoQuery {
        datoCmsSite {
            globalSeo {
            siteName
            }
        }
        }
    `);

    return (
        <StyledLogo to="/" displayNav={displayNav}>
        <StyledSvg
            title={siteName}
            image={logo}
            displayNav={displayNav}
            alt={alt}
        />
        </StyledLogo>
    );
};

export default Logo;