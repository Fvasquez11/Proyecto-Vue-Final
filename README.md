App Prograph

Pasos para iniciar el programa:
  -Ejecutar "npm start" en la ruta /Proyecto-Vue-Final/
  -Ejecutar "npm run dev" en la ruta /Proyecto-Vue-Final/frontend/

Funcionamiento: Las cuentas que se registren con algún nombre de usuario que aparezca en la API de Remind cargará de forma automática los datos de su sesión. En caso contrario se despliega un mensaje de que este usuario no tiene estadísticas en la plataforma Remind.

Cuentas ya creadas:
  -usuario: zmorrott0, contraseña: zmorrott0, rol: usuario (Registrado en la aplicacion Remind)
  -usuario: fernando, contraseña: 123, rol: usuario (No registrado en la aplicacion Remind)
  -usuario: ldambrogio1, contraseña: ldambrogio1, rol: usuario (Registrado en la aplicacion Remind)
  -usuario: admin, contraseña: admin, rol: admin (No registrado en la aplicacion Remind)

Roles: 
  user: solo puede acceder a su información. (se añade por defecto este rol al usar register de la uri auth)
  admin: puede acceder a la información (si esta registrado en Remind) de su sesión y la de otras sesiones. (sólo se puede crear una cuenta admin desde código, por defecto existe una cuenta de admin)

URI API:

#RESOURCES: GET, toda aquella información que obtiene el backend desde la api (usuarios, sesiones etc)
  ##-http://localhost:4000/api/resources/apiusers: devuelve una lista con los objetos de cada usuario (solo nombres)
  ##-http://localhost:4000/api/resources/apiusers/:id :devuelve la información de las sesiones de un usuario.
  ##-http://localhost:4000/api/resources/apiusers/:id/score-data-chart : devuelve el objeto
	data que necesita chartjs para renderizar un gráfico de lineas de las puntuaciones.
  ##-http://localhost:4000/api/resources/apiusers/:id/duration-data-chart : devuelve el objeto
	data que necesita chartjs para renderizar un gáfico de lineas de las duraciones.

#AUTH: acciones POST de registro e inicio de sesion.
  ##-http://localhost:4000/api/auth/register: se debe especificar username y contraseña, asi cómo tambien una lista de roles de usuario (sino se especifican se dejaran como rol user por defecto).
  ##-http://localhost:4000/api/auth/login: con username y contraseña, se hara inicio de sesión. De ser exitoso,
  se enviara el token JWT del usuario firmado con su id. 
  ##-http://localhost:4000/api/auth/logout: Invalida el cookie para cerrar la sesión.
