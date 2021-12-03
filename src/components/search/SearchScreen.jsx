import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)
  console.log(q,"location")

  const [formValues, handleInputChange, reset] = useForm({ searchText: q });

  const { searchText } = formValues;

  const heroesFilted = useMemo(()=>getHeroesByName(searchText), [q]) ;

  const handleSearch = e => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  };
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row border">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7 borde">
          <h4>Resultados</h4>
          <hr />
          {
              (q == '')
              ?<div className="alert alert-info">Buscar un héroe </div>
              :(heroesFilted.length === 0) 
              && <div className="alert alert-danger">No hay resultados: {q}</div>
          }

          {heroesFilted.map(hero => <HeroCard key={hero.id} {...hero} />)}
        </div>
      </div>
    </div>
  );
};
