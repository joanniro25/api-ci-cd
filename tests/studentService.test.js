const studentService = require("../src/services/studentService");

describe("Student Service", () => {

    test("Debe devolver la lista de estudiantes", () => {
        const students = studentService.getStudents();
        expect(Array.isArray(students)).toBe(true);
    });

    test("La lista debe tener al menos un estudiante", () => {
        const students = studentService.getStudents();
        expect(students.length).toBeGreaterThan(0);
    });

    test("El primer estudiante debe llamarse Juan", () => {
        const students = studentService.getStudents();
        expect(students[0].nombre).toBe("Juan");
    });

    test("Debe agregar un nuevo estudiante", () => {

        const nuevo = {
            id: 100,
            nombre: "Pedro",
            edad: 22,
            carrera: "Ingeniería"
        };

        studentService.addStudent(nuevo);

        const students = studentService.getStudents();

        expect(students).toContainEqual(nuevo);

    });

    test("Debe eliminar un estudiante existente", () => {

        const resultado = studentService.deleteStudent(100);

        expect(resultado).toBe(true);

    });

    test("No debe eliminar un estudiante inexistente", () => {

        const resultado = studentService.deleteStudent(999);

        expect(resultado).toBe(false);

    });

    test("Debe devolver un arreglo", () => {

    const students = studentService.getStudents();

    expect(students).toBeInstanceOf(Array);

});

test("El estudiante agregado debe tener un id", () => {

    const nuevo = {
        id: 200,
        nombre: "Laura",
        edad: 19,
        carrera: "Diseño"
    };

    const student = studentService.addStudent(nuevo);

    expect(student.id).toBe(200);

    studentService.deleteStudent(200);

});

test("El estudiante agregado debe conservar su nombre", () => {

    const nuevo = {
        id: 300,
        nombre: "Carlos",
        edad: 24,
        carrera: "Arquitectura"
    };

    const student = studentService.addStudent(nuevo);

    expect(student.nombre).toBe("Carlos");

    studentService.deleteStudent(300);

});

test("Después de eliminar un estudiante ya no debe existir", () => {

    const nuevo = {
        id: 400,
        nombre: "Ana",
        edad: 21,
        carrera: "Medicina"
    };

    studentService.addStudent(nuevo);

    studentService.deleteStudent(400);

    const students = studentService.getStudents();

    const encontrado = students.find(s => s.id === 400);

    expect(encontrado).toBeUndefined();

});

});