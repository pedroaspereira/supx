import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../../store/actions/orderActions'
import { Redirect } from 'react-router-dom'

class CreateOrder extends Component {
    state = {
        title: '',
        items: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state)
        this.props.createOrder(this.state)
        this.props.history.push('/')
    }
    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Cotação</h5>
                <div className="input-filed">
                    <label htmlFor="email">Título</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-filed">
                    <label htmlFor="items">Items</label>
                    <textarea id="items" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn orange lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)