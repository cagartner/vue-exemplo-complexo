// Importação do VueJS
import Vue from 'vue'

// Exemplo do Componente
import HelloWorld from './components/HelloWorld'

// Instanciando a aplicação
new Vue({ // eslint-disable-line no-new
    el: '#app',
    components: {
        HelloWorld
    }
})