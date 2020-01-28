import React, { Component} from 'react';
import Navbar from './components/navbar';         //navbar is the static page
import MainPage from './components/mainPage';     
import Title from './components/title';
import {BrowserRouter} from 'react-router-dom';
import AddBook from './components/addBook';
class App extends Component{

      render(){
        return (
          
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                
                
              </div>
            </div>
          
         <div className="row">
              <div className="col">
                <MainPage/>
               
              </div>
            </div>
          </div>
        )
      }
}
export default App;
