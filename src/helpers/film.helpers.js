export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((film) => film.director === director);
  else return list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map((film) => film[prop] || ""))];
}

export function getFilmStats(list) {
  const avg_score =
    list.reduce((sum, film) => sum + parseInt(film.rt_score), 0) / list.length;
  const acc_score = list.reduce(
    (sum, film) => sum + parseInt(film.rt_score),
    0
  );
  const total = list.length;
  const latest = Math.max(...list.map((film) => parseInt(film.release_date)));

  return { avg_score, acc_score, total, latest };
}
