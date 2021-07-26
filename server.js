const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const { urlencoded } = require('express');

require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: true}));

require("./server/routes/product.routes")(app);

app.listen(port, ()=> console.log(`Listening of Port: ${port}`));