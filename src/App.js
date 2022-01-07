import React from 'react';

class App extends React.Component {
  render() {
    return (
      <RequestForm />
    );
  }
}

class RequestForm extends React.Component {
  state = { rfc_emisor: '',
            email_emisor: '' };
  data = {  rfc_emisor: "NAOO890331S25",
            email_emisor: "narvaez.oscar@live.com",
            rfc_receptor: "ABCD12542223S2",
            email_receptor: "narvaez.oscar@outlook.com"
  }

  handleSubmit = async (event) => {
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.data)
    };

    event.preventDefault();
    const fetchResponse = await fetch('api/func-http-process-request', settings);
    await fetchResponse.json();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span className='formtext'></span>
        <input
        type='text'
        value={this.state.rfc_emisor}
        onChange={event => this.setState({rfc_emisor : event.target.value})}
        placeholder='RFC Emisor'
        required
        />
        <input
        type='text'
        value={this.state.email_emisor}
        onChange={event => this.setState({email_emisor : event.target.value})}
        placeholder='Email Emisor'
        required
        />
        <button>Enviar</button>
      </form>
    )
  }
}

export default App;
