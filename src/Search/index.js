import React, {Component} from 'react'
import Button from '../Button'

export class Search extends Component {
    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }

    render() {
        const {searchTerm, className, onSeachChange, onSubmit, children} = this.props;
        return (
            <form onSubmit={onSubmit}>
                <div className='row'>
                    <div className='col-md-7 offset-md-2 '>
                        <input
                            type="search"
                            className={className}
                            value={searchTerm}
                            onChange={onSeachChange}
                            placeholder={children.text}
                            ref = {(node) =>{ this.input = node}}
                            />
                    </div>
                    <div className='col-md-1'>
                        <Button type='submit' className='btn btn-success'>Search</Button>
                    </div>
                </div>
            </form>
        )
    }

}

export default Search
