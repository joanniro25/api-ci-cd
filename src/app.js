const express = require("express");

const app = express();

const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

// Registrar las rutas
app.use("/", studentRoutes);

const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}

module.exports = app;