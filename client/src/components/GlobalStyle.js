//Libraries
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    @media (max-width: 1700px) {
        font-size: 75%;
    }
}

body{
    background:#ffffff;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    margin-top: 1rem;
    border: 3px solid #4366FB;
    background: transparent;
    color: black;
    transition: all 0.5s ease;
    &:hover{
        background-color: #4366FB;
        color: white;
    }
    font-family: 'Inter', sans-serif;
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{ 
    color: black;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color: #4366FB
}
p{
    padding: 3rem 0rem;
    color: #aaaaaa;
    font-size: 1.4rem;
    line-height: 150%
}
`;

export default GlobalStyle;
