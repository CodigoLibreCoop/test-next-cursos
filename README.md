# nextjs-cursos

This project sets up a Next.js application using Docker and Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Setup

1. Build the Docker images:

    ```bash
    docker compose build
    ```

## Running the Application

To start the application, use the following command:

```bash
docker compose up
```

The application will be accessible at http://localhost:3000.

## Components

This project use ChakraUI as component provider. You can see all available components in https://v2.chakra-ui.com/docs/components

## Consigna

### Notas importantes

- **Tranquilidad:** Hagan hasta donde lleguen. Lo importante es que puedan contarnos lo que pensaron y si les quedaron ideas o desafíos por delante o puntos de conflicto.

- **Uso de Internet:** Está permitido el uso de internet como herramienta, ya que consideramos que en nuestros trabajos tenemos acceso. Úsenlo a conciencia y con honestidad.

- **En caso de duda:** Podés hacernos todas las consultas que necesites a postulaciones@codigolibre.coop.ar con asunto “TEST TÉCNICO - *tuNombre*”

### Descripción

En un curso se admiten dos tipos de alumnes: libres y regulares. Para todes se registran los siguientes datos: nombre, apellido y DNI. Además, se recogen datos específicos según el tipo de alumne:

- **Alumnes libres:**

    - Una nota de examen final

- **Alumnes regulares:**

    - Un porcentaje de asistencia
    - Un conjunto de notas correspondientes a los Trabajos Prácticos (TP), sin una cantidad específica predefinida.

La **nota final** de les alumnes se determina de la siguiente manera:

- **Alumnes libres:**

    - La nota final es la nota del examen final.

- **Alumnes regulares:**
    - Si el porcentaje de asistencia es menor al 70%, la nota final es 1 (uno).
    - Si alguna nota de los TP es menor a 6 (seis), la nota final es 1 (uno).
    - Si no se cumple ninguna de las condiciones anteriores:
        - Si le alumne solo tiene una nota de TP, esa será su nota final.
        - Si le alumne tiene más de una nota de TP, la nota final será el promedio de las notas de los TP, excluyendo la más baja.

Para aprobar, tanto les alumnes libres como les regulares deben obtener una nota final igual o superior a 7 (siete).

### Objetivo

Crear un menú con acceso a 3 vistas:
- Formulario para agregar alumnes con todos sus datos
- Formulario dinámico para cargar información de les alumnes:
    - Elegir une alumne
    - Definir si es libre o regular
    - Si le alumne es de tipo libre, se permitirá cargar solo la nota final.
    - Si le alumne es de tipo regular, se permitiran cargar múltiples notas (cantidad indefinida) y un único número que representa el porcentaje de asistencia.
- Visualización de un curso que indique nombre, la cantidad de alumnes totales y cuántos lo superaron

### Sobre el proyecto base

En el repo hay algunas funcionalidades y implementadas. Recomendamos leerlo antes de empezar a codear.

