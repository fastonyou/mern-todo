import axios from "axios";
const apiUrl = 'http://localhost:5000/api/tasks'

export function getTasks() {
    return axios.get('https://mern-todo-list1212.herokuapp.com//api/tasks')
}

export function addTask(task) {
    return axios.post('https://mern-todo-list1212.herokuapp.com//api/tasks', task)
}

export function updateTask(id, task) {
    return axios.put('https://mern-todo-list1212.herokuapp.com//api/tasks' + '/' + id, task)
}

export function deleteTask(id) {
    return axios.delete('https://mern-todo-list1212.herokuapp.com//api/tasks' + '/' + id)
}