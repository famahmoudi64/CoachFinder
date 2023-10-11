 import { createApp } from 'vue'
 import App from './App.vue'
 import router from './router1'
 import store from './Store/index.js'
 import BaseCard from './components/UI/BaseCard.vue'
 import BaseButton from './components/UI/BaseButton.vue'
 import BaseBadge from './components/UI/BaseBadge.vue'
 import BaseSpinner from './components/UI/BaseSpinner.vue'



const app = createApp(App)

app.use(router)
app.use(store)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner',BaseSpinner)
app.mount('#app')


