import Home from './Home'
import Grid from './Grid'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(
      path.split('/').pop()
    )
  }
]

export default routes;
