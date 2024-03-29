import React from 'react';
//functional component
import {gql} from "apollo-boost";
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Routes from './Routes'
import { useQuery } from 'react-apollo-hooks';
import Footer from './Footer';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from './Header';
import {HashRouter as Router} from 'react-router-dom';


//내가알고싶은 것
const QUERY = gql`
  {
    isLoggedIn @client 
  }
  
`;
const Wrapper = styled.div`
  margin:0 auto;
  max-width:${props => props.theme.maxWidth};
  width: 100%;
`;
export default () => {
  const {
    data: {isLoggedIn}
  } = useQuery(QUERY)
  
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            { isLoggedIn && <Header />}
            <Wrapper>  
              <Routes isLoggedIn ={isLoggedIn} />
              <Footer />
            </Wrapper>
          </>
         </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </>
  </ThemeProvider>
  )
};
