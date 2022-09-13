import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

	html{
		font-size: 16px;
	}

	h1, h2, h3, h4, h5 {
    font-family: 'Source Sans Pro', serif;

	}
  
	p, span, button {
    font-family: 'Questrial', sans-serif;
	}
`;

export default GlobalStyle;
