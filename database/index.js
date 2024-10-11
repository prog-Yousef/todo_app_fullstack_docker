const express = require("express");
const createDbConnection = require('./db');
const db = createDbConnection();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

function insert(todo, done) {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO todos (todo, done) VALUES (?, ?)`,
            [todo, done],
            (error) => {
                if (error) reject(error.message);
    
                resolve();
            }
        )
    });
}

function getTodos() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM todos`, (error, rows) => {
            if (error) reject(error.message);
            
            resolve(rows);
        });
    });
}

app.get('/', async (request, response) => {
    const todos = await getTodos();

    response.json(todos);
});

app.post('/', async (request, response) => {
    const { todo } = request.body;
    
    await insert(todo, false);

    response.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Database service running on Port: ${PORT}.`);
});