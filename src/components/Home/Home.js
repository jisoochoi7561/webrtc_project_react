import React from 'react';
import PageLink from '../PageLink/PageLink';
import Footer from '../Footer/Footer';
function Home() {
    return (
        <div className="Home">
        <PageLink img="images/kurento.png" name = "관리자" to  = "admin"></PageLink>
        <Footer/>
        </div>
    );
  }
  
  export default Home;
  