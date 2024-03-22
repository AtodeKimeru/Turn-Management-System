function StatsTurnsPanel() {
    // TODO: Se debe mandar la lista de asesores para filtrar

    const onFilter = (e) => {
      e.preventDefault()
      console.log('Filtrar')
    }
  
    return (
      <div className="stats_container">
        <div className="stats_subcontainer">
          <div className="stats_info">
            <h2>Tiempo Promedio Turno: #</h2>
            <div className="stats_info_items">
              <div className="stats_info_item">
                <h3>Prioritario: #</h3>
              </div>
              <div className="stats_info_item">
                <h3>Buena Gente: #</h3>
              </div>
              <div className="stats_info_item">
                <h3>Normal: #</h3>
              </div>
            </div>
          </div>
        </div>
  
        <div className="stats_subcontainer">
          <div className="stats_filter">
            <h2>Filtros</h2>
            <div>
              <form className="stats_form" action="" onSubmit={onFilter}>
                <label htmlFor="fecha">Fecha</label>
                <select name="fecha-type" id="fecha">
                  <option value="general">General</option>
                  <option value="dia" defaultChecked>Dia</option>
                  <option value="mes">Mes</option>
                </select>
                <input type="date" />
    
                <label htmlFor="prioridad">Asesor</label>
                <select name="prioridad-type" id="prioridad">
                  <option value="todos" defaultChecked>Todos</option>
                  <option value="1">1 Pepito</option>
                  <option value="2">2 Pepo</option>
                  <option value="3">3 Pepa</option>
                </select>
    
                <button className="button_s_1" type="submit">Filtrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export { StatsTurnsPanel }