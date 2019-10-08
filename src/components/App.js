import React from 'react';
import '../stylesheets/App.css';
//import UserItem from './User';
//import getDataFromServer from './GetDataFromServer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      usersInfo: []
    }

    this.formatData = this.formatData.bind(this);
    this.renderList = this.renderList.bind(this);

  }

  formatData = () =>{
    debugger;
    return <getDataFromServer/>;
  }
  renderList (usersArray) { //¿Llamada a la API para el servidor aquí? No ejecuta bien en constructor
    // const formatData = getDataFromServer(); No lo necesito si puedo pasar los datos desde app?
    return(
      <ul className="users__list"> 
       
        
       </ul>
    )

  }
  // Mover el fetch al constructor para ejecutar solo una vez y setear el estado en el fetch
  render () {
    const usersArray = <getDataFromServer/>;
    //const hello = "hello me renderizo guay PORQUE NO FUNCIONAAA?!!"
    return (
      <div className="App">
       {this.renderList(usersArray)}
      </div>
    );
  }
}

export default App;

// {usersArray.map(user => <li className="users__list--item">{hello}<UserItem props={user}/><//// li>)}