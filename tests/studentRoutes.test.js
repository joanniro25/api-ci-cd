const request = require("supertest");
const app = require("../src/app");

describe("Pruebas de Integración API Students", () => {

    test("GET /students debe responder con código 200", async () => {

        const response = await request(app).get("/students");

        expect(response.statusCode).toBe(200);

    });

    test("GET /students debe devolver un arreglo", async () => {

        const response = await request(app).get("/students");

        expect(Array.isArray(response.body)).toBe(true);

    });
    test("POST /students debe crear un estudiante", async () => {

    const nuevo = {
        id: 500,
        nombre: "Miguel",
        edad: 22,
        carrera: "Ingeniería"
    };

    const response = await request(app)
        .post("/students")
        .send(nuevo);

    expect(response.statusCode).toBe(201);
    expect(response.body.nombre).toBe("Miguel");

});

test("DELETE /students/500 debe eliminar el estudiante", async () => {

    const response = await request(app)
        .delete("/students/500");

    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe("Estudiante eliminado correctamente");

});

test("DELETE de un estudiante inexistente debe responder 404", async () => {

    const response = await request(app)
        .delete("/students/9999");

    expect(response.statusCode).toBe(404);

});

});