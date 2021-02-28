import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posed from 'react-pose';
import uuid from 'react-uuid'
import UserConsumer from '../Context'

const Animation = Posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: 'block'
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: 'none'
        }
    }
});

class AddUser extends Component {
    state = {
        visible: true,
        name: '',
        department: '',
        salary: ''
    }

    changeVisibilty = (event) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addUser = (dispatch, event) => {
        event.preventDefault();

        const { name, department, salary } = this.state;
        const newUser =  {
            id: uuid(),
            name,
            department,
            salary
        };
        dispatch({type: 'ADD_USER', payload: newUser})
    }

    render() {
        const { visible, name, department, salary } = this.state;
        
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        
                        return ( 
                            <div className = 'col-md-12 mb-4'>
                                <button onClick = { this.changeVisibilty } className ='btn btn-dark btn-block mb-5'>{visible ? 'Hide Form' : 'Show Form'}</button>
                                <Animation pose={visible ? 'visible' : 'hidden'}>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit = { this.addUser.bind(this, dispatch) }>
                                            <div className='form-group'>
                                                <label htmlFor='name'>Name</label>
                                                <input type='text' name='name' id='id' placeholder='Enter Name' className='form-control' value={name} onChange = {this.changeInput}/>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='department'>Department</label>
                                                <input type='text' name='department' id='department' placeholder='Enter Department' className='form-control' value = {department} onChange = {this.changeInput}/>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='salary'>Salary</label>
                                                <input type='text' name='salary' id='salary' placeholder='Enter Salary' className='form-control' value = {salary} onChange = {this.changeInput} />
                                            </div>
                                            <button type='submit' className='btn btn-danger btn-block'>Add User</button>
                                        </form>
                                    </div>
                                </div>
                                </Animation>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default AddUser;