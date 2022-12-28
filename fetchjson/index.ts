import axios from 'axios';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo: ITodo = res.data;
  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
    The Todo with ID : ${id}
    The Todo with ID : ${title}
    The Todo with ID : ${completed}
  `);
};
