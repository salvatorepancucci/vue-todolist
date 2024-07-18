const { createApp } = Vue;

createApp({
    data() {
        return {
            // Array di to-do iniziali con 'done' impostato su false e aggiunta dei loghi
            todos: [
                { text: 'Tim Berners Story', done: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
                { text: 'Le basi del front-end: HTML', done: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
                { text: 'Got some style? Cascading Style Sheets', done: false },
                { text: 'Selettori avanzati CSS: non per programmatori della domenica!', done: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
                { text: 'Bootstrap and the story of how my life was saved', done: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
                { text: 'Programmazione front-end: JavaScript (non) ti temo', done: false },
                { text: 'Per fortuna che c\'è Vue.js', done: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' }
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
