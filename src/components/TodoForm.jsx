import React from 'react'

const TodoForm = () => {
  return <div className="todo-form">
    <form >
        <input type="text" placeholder="Digite o título" />
        <select >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Selecione uma categoria</option>
            <option value="Pessoal">Selecione uma categoria</option>
            <option value="Estudos">Selecione uma categoria</option>
        </select>
       
    </form>
  </div>
};

export default TodoForm;