
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todos from './Components/Todos';
import NewQuiz from './Components/NewQuiz';
import { Provider } from 'react-redux';
import store from './State/Store';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
       
          <Navbar/>
          <Routes>
          <Route index element={<Home/>}/>
           <Route path='/'element={<Home/>}/>
           <Route path='new_quiz'element={<NewQuiz/>}/>
           <Route path='myquiz'element={<Todos/>}/>
          </Routes>
          <Footer/>
      </Provider>
    </div>
  );
}

export default App;
