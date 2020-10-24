import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import CardListing from './components/cards/CardListing.vue'
import DeckListing from './components/decks/DeckListing.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cards',
      name: 'Cards',
      component: CardListing,
    },
    {
      path: '/decks',
      name: 'Decks',
      component: DeckListing,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Mimic browser behavior (resume saved position on back/forward)
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // If we have an anchor link, navigate to it (smooth scrolling, if supported)
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      // Otherwise just jump back to the page top when navigating
      return { top: 0 }
    }
  },
})