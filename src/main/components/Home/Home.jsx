import React from 'react';
import { useSelector } from 'react-redux';
import CotizacionList from 'cotizaciones/components/CotizacionList';
import EmptyHome from './components/EmptyHome';
import './Home.scss';

const Home = () => {
  const cotizaciones = useSelector(state => state.cotizaciones);

  return (
    <>
      { cotizaciones.length ? <CotizacionList /> : <EmptyHome /> }
    </>
  );
};

export default Home;