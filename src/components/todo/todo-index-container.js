import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listTodos } from '../../actions/todo-actions'

class TodoIndex extends Component {
  componentDidMount() {
    this.props.listTodos({ token: this.props.aith.token })
  }

  render() {
    return (
      <h1>Todosss</h1>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, todos: state.todos })
const mapDispatchToProps = (dispatch) => bindActionCreators({ listTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoIndex)
