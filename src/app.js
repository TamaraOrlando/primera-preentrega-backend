const express = require("express");
const productRouter = require("./routes/products.router.js");
const cartRouter = require("./routes/carts.router.js");
const app = express();
const PUERTO = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send('Primera preentrega - Programación Backend I');
})

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`);
})