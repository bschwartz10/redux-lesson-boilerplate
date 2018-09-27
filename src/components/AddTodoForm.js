import React, {Component} from 'react'

class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  render() {
    const {handleSubmit, todos} = this.props

    return(
      <section>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(this.state.text, todos.length + 1)
          this.setState({text: ''})
        }}>
          <input
            value={this.state.text}
            placeholder='Add a Todo'
            onChange={(e) => this.handleChange(e)}
          />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState({ text })
  }
}

export default AddTodoForm
