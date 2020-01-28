import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
    import 'bootstrap/dist/css/bootstrap.css';
    import './addBook.css';
    import { Link } from 'react-router-dom';

    class AddBook extends Component{
        state = {
            name: '',
            author: '',
            version: ''
        }
        constructor() {
            super();
            this.name = "";
            this.author = "";
            this.version = "";
            this.added=false;
        }
        addBook = (event) => {
            event.preventDefault();
            this.name = this.refs.name.value;
            /* Here since the setState ie triggered by reactJS event handler onSubmit and not the default one,
            so the setState is Asynchronous */
            this.setState({ name: this.name })
            setTimeout(() => {
                this.props.addBook(this.state);
            })
        }
    handleAuthorChange = (event) => {
        this.setState({ author: event.target.value })
    }

    handleVersionChange = (event) => {
        this.setState({ version: event.target.value })
    }
    render() {
        if(this.state.added==true)
        {
            return <Redirect to="/homepage"/>
        }
        return (
            <React.Fragment>
            <div class="card">

                    <h5 class="card-header header white-text text-center py-4">
                        <strong>Add Book</strong>
                    </h5><br/><br/>

                
                    <div class="card-body px-lg-5 pt-0 ">
                    <div class="d-flex justify-content-center"></div>
                <form onSubmit={this.addBook}>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Name</label>
                            <input type="text" ref="name" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Author</label>
                            <input type="text" value={this.state.author} className="form-control" placeholder="Author" onChange={this.handleAuthorChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Price</label>
                            <input type="text" value={this.state.version} className="form-control" placeholder="Price" onChange={this.handleVersionChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary"> Submit</button>
                    <button><Link to='/homepage'>BACK</Link></button>
                </form>
            </div>
            </div>
     </React.Fragment>
        )
    }
    }
    export default AddBook;

