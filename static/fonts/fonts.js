import { createGlobalStyle } from 'styled-components'
import LatoBlack from './LatoBlack.woff'

export default createGlobalStyle`
    @font-face {
        font-family: "Lato";
        src: local('LatoBlack'),
        url(${LatoBlack}) format('woff');
        font-style: bold;
    }
`
