import { createGlobalStyle } from 'styled-components'
import Lato from './lato.woff'
import LatoBlack from './LatoBlack.woff'
import Apercu from './apercu.woff'

export default createGlobalStyle`
    @font-face {
        font-family: "Lato";
        src: local('Lato'),
        url(${Lato}) format('woff');
    }
    @font-face {
        font-family: "Lato";
        src: local('LatoBlack'),
        url(${LatoBlack}) format('woff');
        font-style: bold;
    }
    @font-face {
        font-family: 'Apercu';
        src: local('Apercu'),
        url(${Apercu}) format('woff');
        font-style: normal;
    }
`
