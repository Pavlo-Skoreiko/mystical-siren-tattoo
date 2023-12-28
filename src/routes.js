export const toPeople = () => "/people";
export const toMovieList = () => "/movie-list";
export const toMovieDatailsPage = ({ id } = { id: ":id" }) => `/movie-list/movie-page/${id}`;

export const toPersonPage = ({ id } = { id: ":id" }) => `/people/profile/${id}`;
