# API REST con Express.js - CI/CD

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![Jest](https://img.shields.io/badge/Jest-Testing-red)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-blue)
![SonarQube Cloud](https://img.shields.io/badge/SonarQube-Cloud-orange)
![License](https://img.shields.io/badge/License-Academic-lightgrey)

## Descripción

Este proyecto consiste en el desarrollo de un servicio web REST utilizando **Node.js** y **Express.js**, implementando un flujo completo de **Integración Continua (CI)** mediante **GitHub Actions**, pruebas automatizadas con **Jest** y **Supertest**, análisis estático del código con **ESLint** y monitoreo de calidad mediante **SonarQube Cloud**.

El objetivo principal es garantizar la calidad del software automatizando las pruebas, el análisis del código y la generación de reportes de cobertura.

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

# Estructura del Proyecto

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
│   │      └── studentController.js
│   │
│   ├── routes
│   │      └── studentRoutes.js
│   │
│   ├── services
│   │      └── studentService.js
│   │
│   └── app.js
│
├── tests
│   ├── studentRoutes.test.js
│   └── studentService.test.js
│
├── config
├── package.json
├── sonar-project.properties
├── CI_REPORT.md
└── README.md
```

---

# Instalación

Clonar el repositorio

```bash
git clone https://github.com/joanniro25/api-ci-cd.git
```

Entrar al proyecto

```bash
cd api-ci-cd
```

Instalar dependencias

```bash
npm install
```

---

# Ejecutar la aplicación

```bash
npm start
```

El servidor quedará disponible en:

```
http://localhost:3000
```

---

# Endpoints Disponibles

## Obtener estudiantes

```
GET /students
```

### Respuesta

```json
[
  {
    "id": 1,
    "nombre": "Juan",
    "edad": 20,
    "carrera": "Ingeniería de Software"
  }
]
```

---

## Crear estudiante

```
POST /students
```

### Body

```json
{
  "id": 2,
  "nombre": "Nicolás",
  "edad": 21,
  "carrera": "Ingeniería de Software"
}
```

---

## Eliminar estudiante

```
DELETE /students/:id
```

Ejemplo

```
DELETE /students/2
```

---

# Ejecutar las pruebas

Todas las pruebas

```bash
npm test
```

---

# Ejecutar ESLint

```bash
npm run lint
```

---

# Generar cobertura

```bash
npm run coverage
```

El reporte HTML se genera en:

```
coverage/lcov-report/index.html
```

---

# Resultados de Cobertura

| Métrica | Resultado |
|----------|----------:|
| Statements | **94.87%** |
| Branches | **83.33%** |
| Functions | **87.50%** |
| Lines | **94.73%** |

Todos los indicadores superan el umbral mínimo del **80%**.

---

# Integración Continua

El proyecto implementa un pipeline de GitHub Actions que ejecuta automáticamente:

- Instalación de dependencias
- Verificación del código con ESLint
- Pruebas unitarias
- Pruebas de integración
- Generación de cobertura
- Análisis de calidad con SonarQube Cloud

Cada cambio enviado al repositorio es validado automáticamente antes de continuar con el desarrollo.

---

# Calidad del Software

Se implementaron:

- 10 pruebas unitarias
- 5 pruebas de integración
- Cobertura superior al 80%
- Análisis estático con ESLint
- Monitoreo de calidad mediante SonarQube Cloud

---

# Autor

**Joan Nicolás Rodríguez Carvajal**

Estudiante de Ingeniería de Software

Universidad Manuela Beltrán

---

# Licencia

Proyecto desarrollado con fines académicos.