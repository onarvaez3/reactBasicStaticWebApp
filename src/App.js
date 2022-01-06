import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Form />
    );
  }
}

class Form extends React.Component {
  state = { rfc_emisor: '' };



  handleSubmit = async (event) => {
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    };

    event.preventDefault();
    () => {
      return async function submitRequest() {
        const fetchResponse = await fetch('api/message', settings);
        await fetchResponse.json();
      };
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

export default App;
