import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import MovieCard from './component/MovieCard/MovieCard';

const App = () => {



  return (

    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie_card/:id' component={MovieCard} />
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
