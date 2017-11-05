import {
  App
} from './app/App.jsx';
import SearchPage from './search-page/SearchPage.jsx';
import FilmInfo from './film-info/FilmInfo.jsx';

export default [{
    path: '/',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/search/:query',
    component: SearchPage,
  },
  {
    path: '/film/:id',
    component: FilmInfo,
  }
]