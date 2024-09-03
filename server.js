const express = require('express');
const path = require('path');
const data = require('./data');
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'gooses_images')));
app.use(express.json());

const corsOptions = {
  origin: 'https://goose-frontend-rho.vercel.app', 
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send({message : "welcome"})
});

//to get all the roles
app.get('/api/every', (req, res) => {
  res.send(data.roles)
});

  //to go to page of a certain role
app.get(`/api/roles/:slug` , (req , res) => {
  const {slug} = req.params;
  console.log(slug)
  const role = data.roles.find((x) => x.slug === slug)
  if(role){
    res.send(role)
  }
  else{
    res.status(404).send({message : "An Error Occured"})
  }
})
  
module.exports = app;

  // const PORT = process.env.PORT || 4000;
  // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
