import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

class Title extends Component{
    render() {
        return(
          <React.Fragment>
            <center>
            <h1>Welcome To Library Portal, Chitkara University</h1>
            <Link to='homepage'>Homepage</Link>
            </center>
            </React.Fragment>
        );
    }
}
export default Title;