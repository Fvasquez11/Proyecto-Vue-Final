URI API:

#RESOURCES: GET, toda aquella informacion que obtiene el backend desde la api (usuarios, sesiones etc)
  ##-http://localhost:4000/api/resources/apiusers: devuelve una lista con los objetos de cada usuario (solo nombres)
  ##-http://localhost:4000/api/resources/apiusers/:id :devuelve la informacion de las sesiones de un usuario.
  ##-http://localhost:4000/api/resources/apiusers/:id/score-data-chart : devuelve el objeto
	data que necesita chartjs para renderizar un grafico de lineas de las puntuaciones.
  ##-http://localhost:4000/api/resources/apiusers/:id/duration-data-chart : devuelve el objeto
	data que necesita chartjs para renderizar un grafico de lineas de las duraciones.

#AUTH: acciones POST de registro e inicio de sesion.
  ##-http://localhost:4000/api/auth/register: se debe especificar username y contraseña, asi como tambien una lista de roles de usuario (sino se especifican se dejaran como rol user por defecto).
  ##-http://localhost:4000/api/auth/login: con username y contraseña, se hara inicio de sesion. De ser exitoso,
  se enviara el token JWT del usuario firmado con su id. 