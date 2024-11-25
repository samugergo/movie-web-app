// Plugins
import { registerPlugins } from '@/plugins'
// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
import { useAppStore } from './stores/app'

const app = createApp(App)

registerPlugins(app)

const exampleStore = useAppStore();
exampleStore.init();

app.mount('#app')
