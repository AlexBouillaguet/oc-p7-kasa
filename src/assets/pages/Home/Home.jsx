import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import GridContainer from '../../components/GridContainer/GridContainer';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Banner 
        imageUrl="/src/assets/images/banner1.jpg"
        title="Chez vous, partout et ailleurs"
      />
      <GridContainer />
      <Footer />
    </>
  );
}

export default Home;