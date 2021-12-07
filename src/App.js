import React from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.botaoPausar = this.botaoPausar.bind(this);
    this.botaoRetomar = this.botaoRetomar.bind(this);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);
    console.log('Eu sou o relógio ' + this.timerID + '.');
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  thick() {
    this.setState({
      date: new Date()
    })
  }

  botaoPausar() {
    clearInterval(this.timerID)
    console.log('Relógio ' + this.timerID + ' pausado.')
  }

  botaoRetomar() {
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);
    console.log('Relógio retomado.')
    console.log('Agora eu sou o relógio ' + this.timerID)
  }

  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button id="pausar" onClick={this.botaoPausar}>Pausar</button>
        <button id="retomar" onClick={this.botaoRetomar}>Retomar</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;