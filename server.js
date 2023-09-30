const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config;
const anxios = require("axios");
const { default: axios } = require("axios");

const app = express();

const url =
  "https://a8ed63d7-3126-4525-aaf4-b914298b2ec6-us-east1.apps.astra.datastax.com/api/json/v1/tickets/tasks";
const token =
  "AstraCS:qPccIIswDmwnWkzGBbfDnQJI:35ec42b278a20568000bb4c0871b09a18058759ea180be209f438f92076c0f44";

app.post('/tickets', async ( req, res) => {
    const formData = req.body.formData 

    const options = {
            method: 'PORT', 
            headers: {
                Accepts: 'application/json', 
                'X-Cassandra-Token': token, 
                'Content-Type': 'application/json'
            }, 
            data: formData
    }


    try  {
        const response = await axios(url, options)
    }



})






  app.listen(PORT, () => console.log("server running on PORT " + PORT));
