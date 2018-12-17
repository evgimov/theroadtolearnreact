import React, {Component} from 'react'
import Button from '../Button'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Table extends Component {

    // isSearched = searchTerm => item => {
    //     return item
    //         .title
    //         .toLowerCase()
    //         .includes(searchTerm.toLowerCase()) || item
    //         .author
    //         .toLowerCase()
    //         .includes(searchTerm.toLowerCase());
    // }
    render() {
        const {list, onDismiss} = this.props;
        return (
            <div>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Author</th>
                            <th scope='col'>Comment</th>
                            <th scope='col'>Point</th>
                            <th scope='col'>Dismiss</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list
                            // .filter(this.isSearched(searchTerm))
                            .map(item => <tr key={item.objectID}>
                                <td>{item.objectID}</td>
                                <td>
                                    <a href={item.url}>{item.title}</a>
                                </td>
                                <td>{item.author}</td>
                                <td>{item.num_comments}</td>
                                <td>{item.points}</td>
                                <td>
                                    <Button onClick={() => onDismiss(item.objectID)} className='btn btn-danger'>
                                        Dismiss
                                    </Button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table
