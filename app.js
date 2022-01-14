const cors = require("cors");
const express = require('express');
const app = express();
const port = process.env.PORT || 5000


const userRouter = require("./api/User/UserRoute")

app.use(cors());
app.use(express.json());

app.use("/api", userRouter)



// listen on port
app.listen(port, () => console.log(`listen on port ${port}`))