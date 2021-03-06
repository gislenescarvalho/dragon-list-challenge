import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
        background-color: #B9B7BD;
        background: ${props => props.theme.background};
        color: ${props => props.theme.text};
    } 
    .container {
        display: flex;
        justify-content: center;
        margin: auto;    
        padding: 10px;
        text-align: center;
        
    }
    .header {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
    }
    h1, h2, legend, label {
        color: ${props => props.theme.titles};
        
    }
    .switch-theme {
        position: fixed;
        background-color: ${props => props.theme.changeThemeBtn};
        color: ${props => props.theme.textBtn};
        border-radius: 25px;
        font-weight: bolder;
        font-size: 14px;
        top: 24px;
        padding: 5px;
        margin: 10px;
        height: 30px;
        width: 125px;
    }
`
