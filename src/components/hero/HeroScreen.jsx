import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


//  const heroImages = require.context('../../assets/heroes/', true);

export const HeroScreen = () => {
  const { heroId } = useParams();
  

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
  
  const imagePath = `/assets/heroes/${id}.jpg`;

  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img
          // src={`../../assets/heroes/${id}.jpg`} // normal
         src={imagePath}
        // src={ heroImages(`./${id}.jpg`) }
          alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className=" col-8 animate__animated animate__fadeIn">
        <h3 className="">
          {superhero}
        </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>first appearance:</b>
            {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Character</h5>
        <p>
          {characters}
        </p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
