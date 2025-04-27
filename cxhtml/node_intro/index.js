const express = require('express');
const app = express();


const PORT = process.env.PORT || 7000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
// const cors = require('cors');

// app.use(cors());

