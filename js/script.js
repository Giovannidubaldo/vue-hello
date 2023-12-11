// Definisco il metodo di Vue
const { createApp } = Vue;

// Creo la struttura per l'applicazione di Vue
createApp({
    data(){
        return {
            // Punto 1 readme.md
            message: 'ciao'
        }
    }
}).mount('#app');
