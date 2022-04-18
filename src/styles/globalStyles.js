import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;
        
    }
    .header {
        background-color: #B9B7BD;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        }

    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme.text};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
    }
    h1 {
        color: ${props => props.theme.titles};
        
    }
    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }
`
