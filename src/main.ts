import { mount } from 'svelte'
import './app.css'
import Router from './Router.svelte'

const app = mount(Router, {
  target: document.getElementById('app')!,
})

export default app
