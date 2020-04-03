import { createGlobalStyle } from 'styled-components'
import Lato from '../fonts/lato.woff'
import LatoBlack from '../fonts/LatoBlack.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: local('Lato'),
        url(${Lato}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Lato';
        src: local('LatoBlack'),
        url(${LatoBlack}) format('woff');
        font-style: bold;
    }
`
