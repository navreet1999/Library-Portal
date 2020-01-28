    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.css';
    import { Link } from 'react-router-dom';
    import "./../index.css";
    import Navbar from './navbar';

    class RecentBook extends Component {

        constructor(props) {
            super(props);
            console.log(this.props);
            this.componentName = "RecentBooksList"
        }

        componentDidMount() {
            console.log(`${this.componentName}: Fetch list of Books`);
            this.props.fetchBooksList();
        }

        componentDidUpdate() {
            console.log("recent Books Component is updated");
        }

        render() {
            console.log(`Recent Books render method is called`);
            return (
                <div>
                    <center>
                    <Navbar />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Book Name</th>
                                    <th>Book Author</th>
                                    <th>Book Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.bookList.map(book =>
                                    <tr key={book.id}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.version}</td>
                                        <td>
                                            <button className="btn btn-outline-dark mr-2" onClick={() => this.sendSelectedBook(book)}><Link to='/edit'>Edit</Link></button>
                                            <button className="btn btn-outline-dark ml-2" onClick={() => this.props.deleteBook(book)}>Delete</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        </center>
                </div>
                
            )
        }

        sendSelectedBook(book) {
            this.props.sendSelectedBook(book);
        }
    }

    export default RecentBook;
