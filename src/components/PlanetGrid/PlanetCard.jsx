function PlanetCard({ planet }) {
  return (
    <figure className="planet-card">
      <div className="planet-card__img-wrapper">
        <img
          src={planet.image}
          alt={`Planet ${planet.planet}`}
          className="planet-card__img"
          loading="lazy"
        />
      </div>
      <figcaption className="planet-card__caption">
        <h3 className="planet-card__name">{planet.planet}</h3>
        <p className="planet-card__distance">
          {/* <span className="planet-card__distance-label">Distance from Sun</span> */}
          <span className="planet-card__distance-value">
            {planet.distanceFromSun}{" "}
            <abbr title="million kilometres">M km</abbr>
          </span>
        </p>
      </figcaption>
    </figure>
  );
}

export default PlanetCard;
