//Server.js

const express = require('express');
const app = express();
const noteRouter = require("./route/NoteRouter");
app.use(express.json());

app.use('/api', noteRouter);

// Start the server
const Port = 6001;
app.listen(Port, () => {
    console.log(`Server is running on Port: ${Port}`);
});
