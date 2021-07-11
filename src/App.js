import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Main from './component/Main/Main';

const App= ()=>{

  //  const dispatch = useDispatch()

  return (
    <div >
       {/* <BrowserRouter>
        <Route path='/' compoent={Main} />
      </BrowserRouter>  */}
      <Main/>

    </div>
    
  );
}

export default App;
