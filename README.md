# Poyecto Chat API
En este proyecto implementamos una api  que trata de recrear las funcionalidades de un chat!

Crea una API que gestiona un login de usuarios manejando JsonWebToken, creando un middleware de autenticación, donde retorna un token de autenticación si el usuario pertenece a la tabla users de la base de datos y sino retorna un error.

#### ruta base de la aplicación: http://localhost:9000/api/v1

### Modelos, rutas y verbos
#### Todas estas rutas está protegidas por al menos una autenticación
- conversations (necesita autenticación de estar logueado)
    -  /conversations  (GET, POST)
    -  /conversations/me (GET)
    - /conversations/:conversations_id (GET,PATCH,DELETE)

- messages (necesita autenticación de ser participante y estar logueado)
    - /conversations/:conversations_id/messages (GET,POST)
    - /conversations/:conversations_id/messages/:messages_id  (GET,DELETE)




### Recursos

- [diagrama del modelo de base de datos](https://dbdiagram.io/d/6139516e825b5b0146f9a927)
- [node skeleton](https://github.com/SheykoWk/Node-skeleton)