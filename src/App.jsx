import "./App.css";
import Counter from "./Counter";
import Lists from "./List";
import TickCounter from "./TickCounter";


function App() {
  
  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  return (
    <>
      <Counter init={51} inc={3}/>
      <TickCounter />
      <Lists people={people}/>
    </>
  );
}

export default App;
