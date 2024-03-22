function StatsTurnsPanel() {
    // TODO: Se debe mandar la lista de asesores para filtrar

    const onFilter = (e) => {
      e.preventDefault()
      console.log('Filtrar')
    }
  
    return (
      <>
        <div>
          <h1>Tiempo Promedio Turno: #</h1>
          <div>
            <div>
              <h3>Prioritario</h3>
              <p>#</p>
            </div>
            <div>
              <h3>Buena Gente</h3>
              <p>#</p>
            </div>
            <div>
              <h3>Normal</h3>
              <p>#</p>
            </div>
          </div>
        </div>
  
        <div>
          <h1>Filtros</h1>
          <div>
            <form action="" onSubmit={onFilter}>
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
  
              <button type="submit">Filtrar</button>
            </form>
          </div>
        </div>
      </>
    )
}

export { StatsTurnsPanel }