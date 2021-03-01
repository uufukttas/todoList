import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserConsumer from '../Context'
import Axios from 'axios'

class User extends Component {
    state = {
        isVisible: false
    }

    onClickEvent = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    onDeleteUser = async (dispatch, event) => {
        const { id } = this.props;
        
        Axios.delete(`http://localhost:3004/users/${id}`)

        dispatch({type: 'DELETE_USER', payload: id})
    }

    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;

                        return ( 
                            <div className='col-md-12 mb-4'> 
                                <div className='card' style = { this.state.isVisible ? { backgroundColor: '#1c5b69', color: 'white'} : null }>
                                    <div className='card-header d-flex justify-content-between'>
                                        <h4 onClick = { this.onClickEvent.bind(this)} >{ this.props.name }</h4>
                                        <FontAwesomeIcon onClick = {this.onDeleteUser.bind(this, dispatch)} style = {{cursor: 'pointer'}} icon = { faTrashAlt }/>
                                    </div>
                                    {
                                        this.state.isVisible ?
                                        <div className='card-body'>
                                            <p className='card-text'>Salary: {this.props.salary}</p>
                                            <p className='card-text'>Department: {this.props.department}</p>
                                        </div> :
                                        null
                                    }
                                </div>
                            </div>
                        );
                    }
                }
            </UserConsumer>
        )
    }
}

User.defaultProps = {
    name: 'Undefined',
    salary: 'Undefined',
    department: 'Undefined'
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default User;
