Take Away

Está aplicación es un servidor WGSI hecha con Flask. Tiene el objetivo de gestionar los datos de la aplicación web Take Away.

Características

   - Autenticación de usuarios
   - Crear, eliminar y editar perfiles para restaurantes. 

Requisitos Previos

Asegúrate de tener los siguientes elementos instalados antes de comenzar:

    Python 3.12.x
    pip (gestor de paquetes de Python)
    Crear un entorno virtual

Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

    Clona el repositorio:

git clone https://github.com/No-Country-simulation/c23-102-webapp.git
git checkout backend/develop
cd c23-102-webapp

Crea y activa un entorno virtual:

python -m venv venv
source venv/bin/activate   # En Windows usa `venv\Scripts\activate`

Instala las dependencias del proyecto:

pip install -e .

Crea la base de datos: 

flask --app take_away init-db

Ejecuta la aplicación:

    flask --app take_away run --debug

    Abre la aplicación en tu navegador en http://127.0.0.1:5000.

Uso

Proporciona instrucciones sobre cómo usar tu aplicación, incluyendo ejemplos de las principales funcionalidades o rutas.

Ejemplo:

    Para acceder a la API de usuarios: GET /api/users
    Para registrar un usuario: POST /api/register

Tecnologías Utilizadas

    Flask: Framework web principal.
    SQLite: Gestor de la datos.
    autopep8: Formateador.
    Pylint: Linter.

Contribuir

Si otros desarrolladores pueden contribuir, explica cómo pueden hacerlo.

    Haz un fork del repositorio.
    Crea una nueva rama (git checkout -b feature/nueva-feature).
    Realiza tus cambios y haz commit (git commit -m 'Descripción de los cambios').
    Haz push de la rama (git push origin feature/nueva-feature).
    Abre un Pull Request.
