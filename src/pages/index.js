// import HomePage from "./home.page";
// import FilmsPage from "./films.page";
// import SingleFilmPage from "./singlefilm.page";

// export { HomePage, FilmsPage, SingleFilmPage };

import HomePage from "./home.page";
import FilmsPage from "./films.page";
import SingleFilmPage from "./singlefilm.page";

import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";

export { HomePage, FilmsPage, SingleFilmPage };
export { filterFilmsByDirector, getListOf, getFilmStats };
