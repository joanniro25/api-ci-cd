const studentService = require("../services/studentService");

function getStudents(req, res) {
    const students = studentService.getStudents();
    res.json(students);
}

function addStudent(req, res) {
    const student = studentService.addStudent(req.body);
    res.status(201).json(student);
}

function deleteStudent(req, res) {
    const id = parseInt(req.params.id);

    const deleted = studentService.deleteStudent(id);

    if (deleted) {
        res.json({ mensaje: "Estudiante eliminado correctamente" });
    } else {
        res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
}

module.exports = {
    getStudents,
    addStudent,
    deleteStudent
};