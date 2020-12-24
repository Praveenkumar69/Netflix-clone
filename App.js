import React from 'react';
import './App.css';
// propes passing to row component
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <>
    <div className="app">
    <Nav />
     <Banner />
     <Row title="NETFLIX ORIGINALS"
     isLargeRow={true}
      fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending New" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrerMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
    </>
  );
}

export default App;
