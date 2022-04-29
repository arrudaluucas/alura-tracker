import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import TarefasTracker from '../views/Tarefas.vue'
import ProjetosTracker from '../views/Projetos.vue'
import FomularioProjeto from '../views/Projetos/Formulario.vue'
import ListaTracker from '../views/Projetos/Lista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasTracker
    },
    {
        path: '/projetos',
        component: ProjetosTracker,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: ListaTracker
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: FomularioProjeto
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: FomularioProjeto,
                props: true
            },
        ]
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador