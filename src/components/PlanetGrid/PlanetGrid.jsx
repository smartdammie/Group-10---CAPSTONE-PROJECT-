import { forwardRef } from 'react'
import usePlanets from '../../hooks/usePlanets'
import PlanetCard from './PlanetCard'
import './PlanetGrid.css'

const PlanetGrid = forwardRef(function PlanetGrid(_, ref) {
  const { planets, loading, error } = usePlanets()

  return (
    <section id="planets" className="planet-grid-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">Visualizing the Differences Between Planets</h2>
        <p className="section-subtitle">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>

        {loading && (
          <div className="planet-grid__status" role="status" aria-live="polite">
            <div className="planet-grid__spinner" aria-label="Loading planets"></div>
            <p>Loading planet data…</p>
          </div>
        )}

        {error && (
          <div className="planet-grid__status planet-grid__status--error" role="alert">
            <p>Could not load planet data: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="planet-grid">
            {planets.map((planet) => (
              <PlanetCard key={planet.planet} planet={planet} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
})

export default PlanetGrid
