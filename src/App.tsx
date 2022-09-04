//3:10:05
import React, { FunctionComponent, useState, useEffect } from 'react';
//import Pokemon from './models/pokemon';
//import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App: FunctionComponent = () => {

 return (
   <Router>
    <div>
      {/*La bare de navigation commun à toutes les pafes*/}
      <nav>
         <div className='nav-wrapper teal'>
            <Link to="/" className="brand-logo center">Pokédex</Link>
         </div>
      </nav>
      {/* Le système de gestion des routes de notre application*/}
      <Switch>
         <Route exact path="/" component={PokemonList} />
         <Route exact path="/pokemons" component={PokemonList} />
         <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
         <Route path="/pokemons/:id" component={PokemonDetail} />
         <Route component={PageNotFound} />
      </Switch>
   </div>
   </Router>
 )
}
  
export default App;