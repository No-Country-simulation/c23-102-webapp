# Take Away

Esta aplicación es un servidor WSGI hecho con Flask. Tiene el objetivo de gestionar los datos de la aplicación web **Take Away**.

## Características

- Autenticación de usuarios.
- Crear, eliminar y editar perfiles para restaurantes.

## Requisitos Previos

Asegúrate de tener los siguientes elementos instalados antes de comenzar:

- Python 3.12.x
- pip (gestor de paquetes de Python)
- Crear un entorno virtual

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/No-Country-simulation/c23-102-webapp.git
    git checkout backend/develop
    cd c23-102-webapp
    ```

2. Crea y activa un entorno virtual:

    En Linux/MacOS:
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```
    En Windows:
    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```

3. Instala las dependencias del proyecto:

    ```bash
    pip install -e .
    ```

4. Crear o actualizar la base de datos:

    ```bash
    flask --app app init-db
    ```

5. Ejecuta la aplicación:

    ```bash
    flask --app take_away run --debug
    ```

    Abre la aplicación en tu navegador en [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Uso

Proporciona instrucciones sobre cómo usar tu aplicación, incluyendo ejemplos de las principales funcionalidades o rutas.

**Ejemplo:**
- Para acceder a la API de usuarios: `GET /api/users`
- Para registrar un usuario: `POST /api/register`

## Tecnologías Utilizadas

- **Flask**: Framework web principal.
- **SQLite**: Gestor de bases de datos.
- **autopep8**: Formateador de código.
- **Pylint**: Linter.

## Contribuir

Para contribur, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:

    ```bash
    git checkout -b feature/nueva-feature
    ```
3. Crea una nueva carpeta dentro del directorio principal con el nombre de la funcionalidad a implementar (ejemplo: /restaurant para el CRUD de restaurante).
3. Realiza tus cambios y haz commit:

    ```bash
    git commit -m "Descripción de los cambios"
    ```

4. Haz push de la rama:

    ```bash
    git push origin feature/nueva-feature
    ```

5. Abre un Pull Request.
