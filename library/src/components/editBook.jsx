import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from 'react-router-dom';
class EditBook extends Component {
    constructor(props) {
        super(props)
        this.state= {
            edited:false
        }
    }

    handleSubmit = (event)=>
    {
        event.preventDefault();
        let newbook={
            name:event.target.name.value,
            //author:event.target.author.value,
           // price : event.target.price.value,
           // desc : event.target.desc.value
        }
        fetch(`http://localhost:8000/edit/${this.props.book.id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify(newbook)
        })
        .then(res=> res.json())
        .then(res=>{

            alert('Book Updated Successfully');
            this.setState({edited:true})
        })
    }

    render() {
        if(this.state.edited)
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
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <div className="form-group">
                            <label>Book Name</label>
                            <input type="text" ref="name" defaultValue={this.props.book.name} className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Book Author</label>
                            <input type="text" ref="author" defaultValue={this.props.book.author} className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Book Version</label>
                            <input type="text" ref="version" defaultValue={this.props.book.version} className="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </form>
            </div>
            </div>
     </React.Fragment>
        )
    }

    editBook = (event) => {
        event.preventDefault();
        let book = {
            id: this.props.book.id,
            name: this.refs.name.value,
            author: this.refs.author.value,
            version: this.refs.version.value,
        }
        this.props.editBook(book);
    }
}

export default EditBook;