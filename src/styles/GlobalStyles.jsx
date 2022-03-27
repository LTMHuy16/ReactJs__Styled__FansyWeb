import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --gray-darker:#33495b;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --black: #14212b;


    --main-color: #ff4a17;

    --height-navbar: 100px;

    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1199px;
    
    --transition: all 0.4s ease-out 0s;
    --transition_1: all 0.1s ease-out;

    --box-shadow: 0 6px 6px rgba(0,0,0,0.19), 
                  0 4px 6px rgba(0,0,0,0.23);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;

    @media screen and (min-width: 576px) {
      font-size: 16px;
    }

    @media screen and (min-width: 992px) {
      font-size: 18px;
    }
  }

  /* ========= SCROLLBAR =========== */
  body::-webkit-scrollbar {
    width: 6px;
    background-color: var(--light);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--main-color);
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: 0;
    outline: none;
  }
  
  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input {
    border: none;
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }
`

export default GlobalStyles;