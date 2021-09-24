import { createGlobalStyle } from 'styled-components';
import { brandFonts } from '../styles';
import sofiaProBoldTtf from '../fonts/sofia-pro-bold.ttf';
import sofiaProRegularTtf from '../fonts/sofia-pro-regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'sofia-pro-regular';
        src: url('${sofiaProRegularTtf}') format('truetype');
        font-display: swap;
    }
    @font-face {
        font-family: 'sofia-pro-bold';
        src: url('${sofiaProBoldTtf}') format('truetype');
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
        font-family: ${brandFonts.primary};
    }

    h3 {
        ${brandFonts.secondary};
        line-height: 24px;
    }
    
    p,
    li {
        ${brandFonts.primary};
        line-height: 24px;
    }
`;

export default GlobalStyle;