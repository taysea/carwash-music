import { createGlobalStyle } from 'styled-components'
import Apercu from './apercu.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Apercu';
        src: local('Apercu'),
        url(${Apercu}) format('woff');
        font-style: normal;
    }
`
