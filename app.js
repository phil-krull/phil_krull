const express = require('express');
const path = require('path');
const port = process.env.PORT || 80;
const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

//-----------Views--------------------
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

//-----------------Server Setup-------------
app.listen(port, ()=>{
    console.log(`listening on Port ${port}`);
})

