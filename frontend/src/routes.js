import Home from './components/Home.vue'
import DataViz from './components/Dataviz.vue'
import Layout from './components/Layout.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/dataviz',
        name: 'dataviz',
        component: DataViz
    },
    {
        path: '/layout',
        name: 'layout',
        component: Layout
    }
]