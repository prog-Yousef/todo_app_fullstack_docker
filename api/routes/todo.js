const { Router } = require('express');
const router = Router();

const { checkBody } = require('../middleware/index');


router.get('/', async (request, response) => {
    const resp = await fetch(process.env.DATABASE);
    const data = await resp.json();

    response.json({ success: true, todos: data });
});

router.post('/', checkBody, async (request, response) => {
    const { todo } = request.body;

    const resp = await fetch(process.env.DATABASE, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: todo }),
    });
    const data = await resp.json();

    response.send({ success: true, message: "Todo created" });
});

module.exports = router;