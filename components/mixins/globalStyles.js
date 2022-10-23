import { createGlobalStyle } from "styled-components";
import { colors } from "../variables/colors";
import { normalize } from "./normalize";
import { below } from "./breakpoints";

const GlobalStyle = createGlobalStyle`

${normalize};




html{
  font-size: 16px;
  font-weight: 300;
}

body{

  font-family: 'Lato', sans-serif;
  line-height: 1.6;
  color: white;
  position: relative;
  background-color: ${colors.black};
  transition: .2s linear;
  padding-left: 100px;
  overflow: hidden;

  



   @media ${below.lg}{
      overflow: unset;
      overflow-x: hidden;
      padding-left: 0;
      background-color: ${colors.dark};


    }
  
  &.active{
    padding-left: 349px;
    @media ${below.lg}{
      padding-left: 0;
      overflow: hidden;
    }
  }

}

input,button,input,textarea,label{
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:nth-child(1) {
      margin: 0;
    }
    margin-top: 24px;
  }
  
  h1 {
  }

  h2 {
  }

  h3 {
  }

  p {
      margin-top: 24px;
      font-size: 16px;
    }



  strong {
    /* font-weight: bold; */
    display: inline-block;
  }

`;

export default GlobalStyle;
