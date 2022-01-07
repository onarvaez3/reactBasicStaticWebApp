import React from 'react';
import {VStack, Heading, Box} from 'native-base';

class App extends React.Component {
  render() {
    return (
      <RequestForm />
    );
  }
}

class RequestForm extends React.Component {
  state = { rfc_emisor: '',
            email_emisor: '',
            rfc_receptor: '',
            email_receptor: '' };
  data = {  rfc_emisor: "NAOO890331S25",
            email_emisor: "narvaez.oscar@live.com",
            rfc_receptor: "ABCD12542223S2",
            email_receptor: "narvaez.oscar@outlook.com"
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.data.email_receptor = this.state.email_receptor;
    this.data.rfc_receptor = this.state.rfc_receptor;

    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.data)
    };

    fetch('api/func-http-process-request', settings)
      .then(async response => {
        if(!response.ok)
        {
          console.error(response.statusText);
        }
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span className='formtext'>Datos del Emisor</span>
        <label>
          RFC
        <input
        type='text'
        value={this.state.rfc_emisor}
        onChange={event => this.setState({rfc_emisor : event.target.value})}
        placeholder='XAXX010101000'
        required
        />
        </label>
        
        <label>
          Email
          <input
          type='text'
          value={this.state.email_emisor}
          onChange={event => this.setState({email_emisor : event.target.value})}
          placeholder='ejemplo@ejemplo.com'
          required
          />
        </label>

        <span className='formtext'>Datos del Receptor</span>
        <label>
          RFC
        <input
        type='text'
        value={this.state.rfc_receptor}
        onChange={event => this.setState({rfc_receptor : event.target.value})}
        placeholder='XAXX010101000'
        required
        />
        </label>
        
        <label>
          Email
          <input
          type='text'
          value={this.state.email_receptor}
          onChange={event => this.setState({email_receptor : event.target.value})}
          placeholder='ejemplo@ejemplo.com'
          required
          />
        </label>
        
        <button>Enviar</button>
      </form>
    )
  }
}

class RequestForm extends React.Component {
  state = { rfc_emisor: '',
            email_emisor: '',
            rfc_receptor: '',
            email_receptor: '' };
  data = {  rfc_emisor: "NAOO890331S25",
            email_emisor: "narvaez.oscar@live.com",
            rfc_receptor: "ABCD12542223S2",
            email_receptor: "narvaez.oscar@outlook.com"
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.data.email_receptor = this.state.email_receptor;
    this.data.rfc_receptor = this.state.rfc_receptor;

    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.data)
    };

    fetch('api/func-http-process-request', settings)
      .then(async response => {
        if(!response.ok)
        {
          console.error(response.statusText);
        }
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <VStack safeArea flex={1}>
          <Box p={3}>
            <Heading size={'lg'} textAlign={'center'}>
              Solicitud de Factura
            </Heading>
          </Box>
        </VStack>
        <span className='formtext'>Datos del Emisor</span>
        <label>
          RFC
        <input
        type='text'
        value={this.state.rfc_emisor}
        onChange={event => this.setState({rfc_emisor : event.target.value})}
        placeholder='XAXX010101000'
        required
        />
        </label>
        
        <label>
          Email
          <input
          type='text'
          value={this.state.email_emisor}
          onChange={event => this.setState({email_emisor : event.target.value})}
          placeholder='ejemplo@ejemplo.com'
          required
          />
        </label>

        <span className='formtext'>Datos del Receptor</span>
        <label>
          RFC
        <input
        type='text'
        value={this.state.rfc_receptor}
        onChange={event => this.setState({rfc_receptor : event.target.value})}
        placeholder='XAXX010101000'
        required
        />
        </label>
        
        <label>
          Email
          <input
          type='text'
          value={this.state.email_receptor}
          onChange={event => this.setState({email_receptor : event.target.value})}
          placeholder='ejemplo@ejemplo.com'
          required
          />
        </label>
        
        <button>Enviar</button>
      </form>
    )
  }
}

export default App;