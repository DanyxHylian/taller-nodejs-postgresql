const{ Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Zelda123',
    database: 'tienda',
    port: '5432'
});

const getCliente = async (req, res) => {
    const response = await pool.query('SELECT * FROM cliente');
    res.status(200).json(response.rows);
};

const getClienteByCedula = async (req, res) => {
    const cedula = req.params.cedula;
    const response = await pool.query('SELECT * FROM cliente WHERE cedula = $1', [cedula]);
    res.json(response.rows);
};

const createCliente = async (req, res) => {
    const {cedula, nombre, apellido} = req.body;
    const response = await pool.query('INSERT INTO cliente (cedula, nombre, apellido) VALUES ($1, $2, $3)', [cedula, nombre, apellido]);
    console.log(response);
    res.json({
        message: 'Cliente agregado satisfactoriamente.',
        body: {
            user: {cedula, nombre, apellido}
        }
    })
};

const deleteCliente = async (req, res) => {
    const cedula = req.params.cedula;
    const response = await pool.query('DELETE FROM cliente WHERE cedula = $1', [cedula]);
    console.log(response);
    res.json(`Cliente ${cedula} eliminado satisfactoriamente.`);
}

module.exports = {
    getCliente,
    getClienteByCedula,
    createCliente,
    deleteCliente
}