import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));


function App(props){
    return (
        <h1> {props.saludo} {props.name}</h1>
    );
}

function withSaludo(WrapperdComponent) {
    return function WrapperdComponentWithSaludo(saludo) {
      return function ComponenteDeVerdad (props) {
        return (
          <React.Fragment>
            <WrapperdComponent {...props} saludo={saludo}/>
            <p>Estamos acompañamdo al WrapperdComponent {props.nombre}</p>
          </React.Fragment>
        );
      }
    }
  }

  const AppwithSaludo = withSaludo(App)
const AppwithSaludo2 = AppwithSaludo('Buenass');
const AppwithSaludo3 = AppwithSaludo('Buenass amigos');

  

// componente 
root.render(
    <React.Fragment>
    <AppwithSaludo2 nombre={"Alex"} />
    <AppwithSaludo3 nombre={"jose"} />
  </React.Fragment>,
 // Si declaramos el componente con apertura y cierre de App, podemos hacer uso de la propiedad children 
 // <App 
 //     saludo="Buenas"
 //     nombre="Alejandro"
 // />
 );


