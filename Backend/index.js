const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const pool = require('./database');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen(3004, () => {
    console.log('listening on 3004');
});

app.get('/', (req, res) => {
    res.send('Hello Jagannath');
});

app.get('/popular_place', async(req, res)=>{
    const data = await pool.query(`select * from place`)
    const result = data.rows
    res.send(result)

})

app.get('/placebydistrict/:district_id', async (req, res) => {
    try {
        const district_id = req.params.district_id;
        const { rows } = await pool.query('SELECT * FROM place WHERE district_id = $1', [district_id]);
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/hotelsbydistrictandplace/:district_id/:place_id', async (req, res) => {
    try {
        const { district_id, place_id } = req.params;
        const { rows } = await pool.query(
            'SELECT * FROM hotel WHERE district_id = $1 AND place_id = $2',
            [district_id, place_id]
        );
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/placebycategory/:category_id', async (req, res) => {
    try {
        const category_id = req.params.category_id;
        const { rows } = await pool.query('SELECT * FROM place WHERE categories_id = $1', [category_id]);
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/allcategory', async(req, res)=>{
    const cats = await pool.query(`select * from category`)
    const result = cats.rows
    res.send(result)
})

app.get('/searchbyplace/:place', async (req, res) => {
    try {
        const placename = req.params.place.toUpperCase();
        const places = await pool.query(
            'SELECT * FROM place WHERE UPPER(place_name) LIKE $1', 
            [`${placename}%`]
        );
        res.send(places.rows);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/add_new_place', async (req, res) => {
    try {
        const { place_name, district_id, category_id, by_road, by_train } = req.body;
        const queryText = `
            INSERT INTO place (place_name, district_id, category_id, by_road, by_train)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [place_name, district_id, category_id, by_road, by_train];
        const result = await pool.query(queryText, values);
        res.status(201).send(result.rows[0]);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/add_new_hotel', async (req, res) => {
    try {
        const { hotel_name, district_id, place_id } = req.body;
        const queryText = `
            INSERT INTO hotel (hotel_name, district_id, place_id)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const values = [hotel_name, district_id, place_id];
        const result = await pool.query(queryText, values);
        res.status(201).send(result.rows[0]);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).send('Internal Server Error');
    }
});


