const { createApp } = Vue;

createApp({
    data() {
        return {
            // Array di to-do iniziali con 'done' impostato su true
            todos: [
                { text: 'Tim Berners Story', done: false },
                { text: 'Le basi del front-end: HTML', done: false },
                { text: 'Got some style? Cascading Style Sheets', done: false },
                { text: 'Selettori avanzati CSS: non per programmatori della domenica!', done: false },
                { text: 'Bootstrap and the story of how my life was saved', done: false },
                { text: 'Programmazione front-end: JavaScript (non) ti temo', done: false },
                { text: 'Per fortuna che c\'è Vue.js', done: false }
            ],
            
        };
    },
    methods: {
        // Segna un to-do come completato
        markAsDone(index) {
            this.todos[index].done = true;
        }
        // Rimuove un to-do dall'array
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
    }
}).mount('#app');
