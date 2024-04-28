const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const projectRoutes = require('./routes/heroes');
const redirectToApi = require('./middleware/redirect');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', projectRoutes);
app.use(redirectToApi);

// Opciones de configuración de Swagger
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Swagger',
        version: '1.0.0',
        description: 'Api para gestionar los heroes.',
        contact: {
            name: "Jorge Benedito Llopis",
            url: "https://es.linkedin.com/in/jorge-benedito-llopis-17b73159?trk=public_profile_samename-profile",
            email: "jorge.benedito.llopis@email.com",
          },
      },
      servers: [
        {
          url: "http://localhost:3000/api",
        },
      ],
    },
    apis: ['./routes/*.js', './components/schemas/*.js'], // Ruta a los archivos donde definirás tus endpoints
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
});

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {explorer : true}));
app.use('/uploads', express.static('uploads'));
module.exports = app;
