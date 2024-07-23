import express from 'express';
import mysql from 'mysql2';

const app = express();

app.use(express.static('public'));

const conexion = mysql.createConnection({
    host: "localhost",
    database: "login_node",
    user: "root",
    password: "root"
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/validar", (req, res) => {
    const datos = req.body;
    const cedula = datos.ced;
    const nombre = datos.nom;
    const apellido = datos.apell;
    const password = datos.pass;
    const correo = datos.correo;

    const buscar = `SELECT * FROM usuarios WHERE cedula = ${cedula}`;
    conexion.query(buscar, (error, row) => {
        if (error) {
            throw error;
        } else {
            if (row.length > 0) {
                console.log("No se puede registrar, usuario ya existe");
                res.status(400).send("No se puede registrar, usuario ya existe");
            } else {
                const registrar = `INSERT INTO usuarios (cedula, nombre, apellido, correo, password) VALUES ('${cedula}', '${nombre}', '${apellido}', '${correo}', '${password}')`;
                conexion.query(registrar, (error) => {
                    if (error) {
                        throw error;
                    } else {
                        console.log("¡Datos almacenados con éxito!");
                        res.render("register", { welcomeMessage: "Usuario registrado con éxito." });
                    }
                });
            }
        }
    });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const buscar = "SELECT * FROM usuarios WHERE cedula = ? AND password = ?";
    conexion.query(buscar, [username, password], (error, rows) => {
        if (error) {
            throw error;
        } else {
            if (rows.length > 0) {
                console.log("Inicio de sesión exitoso");
                res.status(200).send("Inicio de sesión exitoso");
            } else {
                console.log("Cédula o contraseña incorrectas");
                res.status(400).send("Cédula o contraseña incorrectas");
            }
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor creado en http://localhost:${port}`);
});

export default app;
