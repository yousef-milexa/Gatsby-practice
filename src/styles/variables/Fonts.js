import { css } from 'styled-components';

export const brandFonts = {
    sofiaProBoldH2: () => {
        return css`
        font-family: 'Sofia Pro', sans-serif;
        font-weight: bold;
        font-style: normal;
        font-size: 26px;
        line-height: 32px;
        `;
    },
    sofiaProBodyReg: () => {
        return css`
        font-family: 'Sofia Pro', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        `;
    },
    sofiaProBodyBold: () => {
        return css`
        font-family: 'Sofia Pro', sans-serif;
        font-weight: bold;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        `;
    },
    sofiaProBodySml: () => {
        return css`
        font-family: 'Sofia Pro', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 14px;
        line-height: 24px;
        `;
    },
    sofiaProBodyXSml: () => {
        return css`
        font-family: 'Sofia Pro', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 12px;
        line-height: 16px;
        `;
    },
    GelicaH1: () => {
        return css`
        font-family: 'Gelica', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 42px;
        line-height: 48px;
        `;
    },
    GelicaH2: () => {
        return css`
        font-family: 'Gelica';
        font-weight: normal;
        font-style: normal;
        font-size: 42px;
        line-height: 48px;
        `;
    },
};