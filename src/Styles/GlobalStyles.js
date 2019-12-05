import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
//*전역선택자 모든요소에 적용한다
export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    * {
        box-sizing:border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props =>props.theme.blackColor};
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top:140px;
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;