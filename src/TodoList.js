import React, { useState } from 'react';

function TodoItem({ task, onDelete }) {
    return (
    <li>
        {task}
        <button onClick={onDelete} style={{ marginLeft: '10px', color: 'red' }}>
            Hapus
        </button>
    </li>
    );
}

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]); // Tambahkan tugas baru ke daftar
            // setNewTask(''); // Kosongkan input setelah ditambahka
        }
    };
    
    const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Perbarui daftar tugas tanpa tugas yang dihapus
    };
    
    return (
    <div>
        <h2>Daftar Tugas</h2>
        {/* Form untuk menambahkan tugas baru */}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tambahkan tugas baru" value={newTask} onChange={handleInputChange} />
            <button type="submit">Tambah</button>
        </form>

        {/* Daftar tugas */}
        <ul>
            {tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
            ))}
        </ul>
    </div>
    );
}

export default TodoList;
