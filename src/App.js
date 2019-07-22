import React, { Component } from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListasCitas from './components/ListasCitas';

class App extends Component {
  state={
    citas:[]
  }
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      });
    }
  }

  componentDidUpdate(){
    localStorage.setItem('citas',JSON.stringify(this.state.citas));
  }
  
  crearNuevaCita= datos =>{

    console.log(datos)
    const citas =[...this.state.citas,datos];

    this.setState({
      citas
    });
  }
  
  eliminarCita = id=>{
    const citasActuales =[...this.state.citas];

    const citas = citasActuales.filter(cita=>cita.id !== id);

    this.setState({
      citas
    });

  }

  render() {
    return (
      <div className="container">
        <Header titulo='Administrador paciente veterinaria'/>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
          </div>
          <div className="col-md-10 mx-auto">
            <ListasCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
        
          
          
      
      </div>
    );
  }
}

export default App;

