const { createApp } = Vue;

createApp({
    data() {
        return {
            // Array di to-do iniziali con 'done' impostato su false
            todos: [
                { text: 'Tim Berners Story', done: false },
                { text: 'Le basi del front-end: HTML', done: false },
                { text: 'Got some style? Cascading Style Sheets', done: false },
                { text: 'Selettori avanzati CSS: non per programmatori della domenica!', done: false },
                { text: 'Bootstrap and the story of how my life was saved', done: false },
                { text: 'Programmazione front-end: JavaScript (non) ti temo', done: false },
                { text: 'Per fortuna che c\'è Vue.js', done: false }
            ],
            // Nuovo to-do da aggiungere
            newTodo: ''
        };
    },
    methods: {
        // Segna un to-do come completato
        markAsDone(index) {
            this.todos[index].done = true;
        },
        // Rimuove un to-do dall'array dopo conferma
        confirmRemove(index) {
            if (confirm('Sei sicuro? La cancellazione sarà irreversibile!')) {
                this.removeTodo(index);
            }
        },
        // Rimuove un to-do dall'array
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        // Aggiunge un nuovo to-do all'array
        addTodo() {
            this.newTodo.trim() !== '' ? this.todos.push({ text: this.newTodo, done: false }) : null;
            this.newTodo = '';
        },
        // Inverte il valore di 'done' di un to-do
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    }
}).mount('#app');
