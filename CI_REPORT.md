# CI/CD Report - API REST con Express.js

## Información del Proyecto

**Proyecto:** API REST con Express.js  
**Tecnología:** Node.js + Express.js  
**Repositorio:** api-ci-cd  
**Autor:** Joan Nicolás Rodríguez Carvajal

---

# Objetivo

El objetivo del proyecto fue desarrollar un servicio REST utilizando Express.js e implementar un pipeline de Integración Continua (CI) que garantice la calidad del software mediante pruebas automatizadas, análisis estático del código y generación automática de reportes de cobertura.

---

# Arquitectura del Proyecto

```
api-ci-cd
│
├── .github
│   └── workflows
│       └── ci.yml
│
├── coverage
│
├── docs
│
├── src
│   ├── controllers
│   ├── routes
│   ├── services
│   └── app.js
│
├── tests
│   ├── studentRoutes.test.js
│   └── studentService.test.js
│
├── package.json
├── sonar-project.properties
└── CI_REPORT.md
```

---

# Pipeline CI/CD

## Diagrama (Mermaid)

```mermaid
flowchart LR

A[Developer] --> B[Git Commit]

B --> C[Push a GitHub]

C --> D[GitHub Actions]

D --> E[Instalar Dependencias]

E --> F[ESLint]

F --> G[Jest Tests]

G --> H[Coverage]

H --> I[SonarQube Cloud]

I --> J[Resultado del Pipeline]
```

---

# Flujo del Pipeline

Cada vez que se realiza un **Push** al repositorio GitHub ocurre el siguiente proceso automáticamente:

1. GitHub Actions detecta el nuevo commit.
2. Descarga el código fuente.
3. Instala Node.js.
4. Instala las dependencias mediante npm.
5. Ejecuta ESLint para verificar los estándares del código.
6. Ejecuta todas las pruebas unitarias.
7. Ejecuta todas las pruebas de integración.
8. Genera el reporte de cobertura.
9. Envía el análisis a SonarQube Cloud.
10. Publica el resultado del Pipeline.

---

# Pruebas Implementadas

## Pruebas Unitarias

Se implementaron **10 pruebas unitarias** para verificar la lógica del servicio.

Se validó:

- Obtener estudiantes
- Agregar estudiante
- Eliminar estudiante
- Eliminación inexistente
- Integridad de los datos
- Validación de listas
- Validación de IDs
- Conservación de información

---

## Pruebas de Integración

Se implementaron **5 pruebas de integración**.

Endpoints probados:

GET /students

POST /students

DELETE /students/:id

Además se validaron los códigos HTTP:

- 200 OK
- 201 Created
- 404 Not Found

---

# Cobertura del Código

Resultados obtenidos:

| Métrica | Resultado |
|---------|-----------|
| Statements | **94.87%** |
| Branches | **83.33%** |
| Functions | **87.50%** |
| Lines | **94.73%** |

Todos los resultados superan el umbral mínimo del **80%** establecido para el proyecto.

---

# Justificación del Umbral

Se estableció una cobertura mínima del **80%** debido a que es un estándar ampliamente utilizado en proyectos profesionales.

Este porcentaje permite asegurar que la mayor parte de la lógica del negocio es ejecutada durante las pruebas sin exigir una cobertura absoluta del 100%, la cual normalmente incrementa el tiempo de desarrollo sin aportar beneficios significativos.

---

# Análisis Estático

Se utilizó **ESLint** para verificar:

- Errores de sintaxis
- Variables no definidas
- Buenas prácticas
- Consistencia del código

Los problemas encontrados fueron corregidos antes de integrar el pipeline.

---

# SonarQube Cloud

El proyecto fue integrado con SonarQube Cloud para realizar análisis estático automático del código.

Las métricas evaluadas incluyen:

- Bugs
- Vulnerabilidades
- Code Smells
- Cobertura
- Maintainability
- Reliability
- Security

Cada nuevo Push ejecuta automáticamente un nuevo análisis.

---

# Feedback Loops

El proyecto implementa varios mecanismos de retroalimentación automática:

## Desarrollo Local

- ESLint informa errores antes del commit.
- Jest valida el funcionamiento de la aplicación.
- Coverage permite verificar la cobertura.

## GitHub Actions

Después de cada Push:

- Ejecuta automáticamente las pruebas.
- Ejecuta ESLint.
- Genera cobertura.
- Reporta errores inmediatamente.

## SonarQube Cloud

Analiza continuamente:

- Calidad del código.
- Complejidad.
- Vulnerabilidades.
- Cobertura.

---

# Tecnologías Utilizadas

- Node.js
- Express.js
- Jest
- Supertest
- ESLint
- GitHub Actions
- SonarQube Cloud
- Git
- GitHub

---

# Conclusiones

La implementación del pipeline CI/CD permitió automatizar completamente el proceso de validación del software.

El uso conjunto de GitHub Actions, Jest, ESLint y SonarQube Cloud garantiza que cada modificación realizada sobre el repositorio sea evaluada automáticamente antes de continuar con el desarrollo.

La automatización implementada reduce errores, mejora la mantenibilidad del proyecto y facilita la entrega continua de software con altos estándares de calidad.