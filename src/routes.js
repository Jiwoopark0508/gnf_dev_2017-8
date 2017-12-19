import Home from './components/Home.vue'
import DataViz from './components/DataViz.vue'

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
    }
]