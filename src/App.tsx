import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Compras do dia', done: false },
    { id: 2, name: 'Tarefas de Casa', done: false }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }



  return (
    <C.Container>
      <C.Caixa>
        <C.Title>Lista de Tarefas</C.Title>

        <AddArea onEnter={handleAddTask} />

        {/* Área de adicionar Tarefas */}

        {list.map((item, index)=>(
            <ListItem
              key={index}
              item={item}
              
            />
          ))}
      </C.Caixa>
    </C.Container>

  );
}

export default App;