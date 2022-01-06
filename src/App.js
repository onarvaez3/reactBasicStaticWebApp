import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Form />
    );
  }
}

class From extends React.Component {
  render() {
    return (
      <form>
        <span className='formtext'><Form /></span>
        <input
        type='text'
        placeholder='RFC Emisor'
        required
        ></input>
        <button>Enviar</button>
      </form>
    )
  }
}

export default App;
