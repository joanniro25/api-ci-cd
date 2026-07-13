let students = [
    {
        id: 1,
        nombre: "Juan",
        edad: 20,
        carrera: "Ingeniería de Software"
    }
];

function getStudents() {
    return students;
}

function addStudent(student) {
    students.push(student);
    return student;
}

function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return false;
    }

    students.splice(index, 1);
    return true;
}

module.exports = {
    getStudents,
    addStudent,
    deleteStudent
};