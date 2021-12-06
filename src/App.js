import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MoviePageContainer from './component/Main/MoviePageContainer';
import MovieCard from './component/MovieCard/MovieCard';


const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path='/' component={MoviePageContainer} />
            <Route path='/movie_card/:id' component={MovieCard } />
             <Redirect to='/' />
          </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
