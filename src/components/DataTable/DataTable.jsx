import data from "../../data/planetTableData";
import "./DataTable.css";

function DataRow({ planet }) {
  return (
    <>
      <td className="data-table__planet-name">{planet.name}</td>
      <td>{planet.mass}</td>
      <td>{planet.diameter}</td>
      <td>{planet.density}</td>
      <td>{planet.gravity}</td>
    </>
  );
}

function DataTable() {
  return (
    <section id="data-table" className="data-table-section">
      <div className="container">
        <h2 className="data-table__title">Planetary Facts at a Glance</h2>
        <p className="data-table__subtitle">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <p className="data-table__source">
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </p>

        <div className="data-table__wrapper">
          <table className="data-table">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={2} className="data-table__th-empty"></th>
                <th>Name</th>
                <th>Mass (10 24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>
            <tbody>
              {/* ── Terrestrial Planets (colspan=2 — no sub-category) ── */}
              {data.terrestrial.map((planet, i) => (
                <tr key={planet.name}>
                  {i === 0 && (
                    <td
                      rowSpan={data.terrestrial.length}
                      colSpan={2}
                      className="data-table__category data-table__special-category"
                    >
                      Terrestrial Planets
                    </td>
                  )}
                  <DataRow planet={planet} />
                </tr>
              ))}

              {/* ── Jovian → Gas Giants ── */}
              {data.gasGiants.map((planet, i) => (
                <tr key={planet.name}>
                  {i === 0 && (
                    <td
                      rowSpan={data.gasGiants.length + data.iceGiants.length}
                      className="data-table__category data-table__category--jovian data-table__special-category"
                    >
                      Jovian
                      <br />
                      Planets
                    </td>
                  )}
                  {i === 0 && (
                    <td
                      rowSpan={data.gasGiants.length}
                      className="data-table__subcategory data-table__special-category"
                    >
                      Gas Giants
                    </td>
                  )}
                  <DataRow planet={planet} />
                </tr>
              ))}

              {/* ── Jovian → Ice Giants ── */}
              {data.iceGiants.map((planet, i) => (
                <tr key={planet.name}>
                  {i === 0 && (
                    <td
                      rowSpan={data.iceGiants.length}
                      className="data-table__subcategory data-table__special-category"
                    >
                      Ice Giants
                    </td>
                  )}
                  <DataRow planet={planet} />
                </tr>
              ))}

              {/* ── Dwarf Planets (colspan=2 — no sub-category) ── */}
              {data.dwarf.map((planet, i) => (
                <tr key={planet.name}>
                  {i === 0 && (
                    <td
                      rowSpan={data.dwarf.length}
                      colSpan={2}
                      className="data-table__category data-table__special-category"
                    >
                      Dwarf Planets
                    </td>
                  )}
                  <DataRow planet={planet} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default DataTable;
