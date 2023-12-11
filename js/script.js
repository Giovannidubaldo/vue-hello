// Definisco il metodo di Vue
const { createApp } = Vue;

// Creo la struttura per l'applicazione di Vue
createApp({
    data(){
        return {
            // Punto 1 readme.md
            message: 'A.S.Roma',
            // Punto 2 readme.md
            image: './img/roma.jpg'
        }
    }
}).mount('#app');
