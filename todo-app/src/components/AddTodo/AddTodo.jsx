import './AddTodo.css';

function AddTodo() {
    let todo = {
        todo: ''
    }

    function handleInput(event) {
        todo.todo = event.target.value;
    }

    async function addTodo() {
        const response = await fetch('http://localhost:8002/api/todo', {
            body: JSON.stringify(todo),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    
    return (
        <section className='add-todo'>
            <input type='text' className='add-todo__input' onKeyUp={ handleInput } />
            <button className='add-todo__button' onClick={ addTodo }>Lägg till todo</button>
        </section>
    )
}

// const input = document.querySelector('input');

// input.addEventListener('keyup', (event) => {
//     console.log(event.target.value);
// });

export default AddTodo;