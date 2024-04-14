import './App.css';
import { dataBase } from './config/firebase';
import { collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const App = () => {
  // получить и отрисовать все документы после отрисовки интерфейса
  const getAllTodos = async () => {
    // Создать ссылку на коллекцию
    const todosCollectionRef = collection(dataBase, 'todos');
    // Создать SnapShot (снимок) по коллекции
    const snapshot = await getDocs(todosCollectionRef);
    // Создать список ввиде массива с полученными данными
    const todosList = snapshot.docs.map(todo => ({ id: todo.id, ...todo.data() }))
    console.log(todosList);
  }

  // получить один документ
  const getOneTodo = async (id) => {
    try {
      const todoDoc = doc(dataBase, 'todos', id);
      const snapshot = await getDoc(todoDoc);
      const todo = snapshot.data();
      console.log(todo);
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="content">
      <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button onClick={getAllTodos} >Get all todos</button>
        <button onClick={() => getOneTodo('Pnz26HLLtX7kIxFyefOo')} >Get one todo</button>
      </div>

    </div>
  );
};

export default App;
