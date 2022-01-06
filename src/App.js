import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Form />
    );
  }
}

class Form extends React.Component {
  state = { rfc_emisor: '' }

  render() {
    return (
      <form>
        <span className='formtext'><Form /></span>
        <input
        type='text'
        value={this.state.rfc_emisor}
        onChange={event => this.setState({rfc_emisor : event.target.value})}
        placeholder='RFC Emisor'
        required
        ></input>
        <button>Enviar</button>
      </form>
    )
  }
}
