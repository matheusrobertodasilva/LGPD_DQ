import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Main from './components/Main.vue'
import EncarregadoDeDados from './components/EncarregadoDeDados.vue'
import PoliticaDePrivacidade from './components/PoliticaDePrivacidade.vue'
import Contato from './components/Contato.vue'
import Informacoes from './components/Informacoes.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Main},
        { path: '/encarregadoDeDados', component: EncarregadoDeDados},
        { path: '/politicaDePrivacidade', component: PoliticaDePrivacidade},
        { path: '/contato', component: Contato},
        { path: '/informacoes', component: Informacoes},
    ]
});

import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(router);

app.mount('#app')
