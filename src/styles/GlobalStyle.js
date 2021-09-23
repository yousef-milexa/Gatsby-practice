import { createGlobalStyle } from 'styled-components';
import { brandFonts } from '../styles';
import sofiaProBoldTTF from '../fonts/sofia-pro-bold.ttf';
import sofiaProRegTTF from '../fonts/sofia-pro-regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Sofia Pro';
            src: url('${sofiaProBoldTTF}') format('ttf'),
                url('${sofiaProRegTTF}') format('ttf');
        font-display: swap;
    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    body {
        position: relative;
        margin: 0;
        padding: 0;
        line-height: 1.3;
        ${brandFonts.sofiaProBodyReg};
    }

    button,
    h3 {
        ${brandFonts.sofiaProBodyBold};
    }

    p,
    li {
        ${brandFonts.sofiaProBodySml};
    }
`;

export default GlobalStyle;