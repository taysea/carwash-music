import { createGlobalStyle } from 'styled-components'
import Gotham from './GothamPro-Medium.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Gotham';
        src: local('Gotham'),
        url(${Gotham}) format('woff');
        font-style: normal;
    }
`
