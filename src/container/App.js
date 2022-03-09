import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

import '../styles/App.css';
 
function App() {
 return (
  <div className="App">
    <h3>Convidados:</h3>
      <ClassComponent nome="João" estaNaLista={true}/>
      <ClassComponent nome="Maria" estaNaLista={true}/>
      <ClassComponent nome="Enzo Vanlentina" estaNaLista={false}/>
      <ClassComponent nome="Ana Vitória" estaNaLista={false}/>
    <h3>Tarefa: </h3>
      <FunctionComponent nome="João" tarefa="algodão-doce" />
      <FunctionComponent nome="Maria" tarefa="paçoca" />
      <FunctionComponent nome="Enzo Vanlentina" tarefa="pipoca" />
  </div>
 );
}
 
export default App;
