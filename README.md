URI API:

RESOURCES: toda aquella informacion que obtiene el backend desde la api (usuarios, sesiones etc)
  -http://localhost:4000/api/resources/apiusers: devuelve una lista con los objetos de
	cada usuario (solo id y username).
  -http://localhost:4000/api/resources/apiusers/:id :devuelve la informacion completa de
	un usuario en especifico (buscado por id).
  -http://localhost:4000/api/resources/apiusers/:id/sessions :devuelve la informacion completa de
	las sesiones de un usuario en especifico (buscado por id).
  -http://localhost:4000/api/resources/apiusers/:id/score-data-chart : devuelve el objeto
	data que necesita chartjs para renderizar un grafico de lineas de las puntuaciones.
  -http://localhost:4000/api/resources/apiusers/:id/duration-data-chart : devuelve el objeto
	data que necesita chartjs para renderizar un grafico de lineas de las duraciones.