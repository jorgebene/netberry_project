import express from 'express';
const router = express.Router(); // Inicializa el router de Express

/**
 * @swagger
 * /heroes:
 *   get:
 *     summary: Retorna una lista de heroes.
 *     operationId: getHeroes
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         required: false
 *         description: Filtra los heroes que contienen el valor proporcionado en su nombre.
 *     responses:
 *       200:
 *         description: Lista de heroes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Heroe'
 */

/**
 * @swagger
 * /heroes/{id}:
 *   get:
 *     summary: Obtiene los detalles de un heroe en específico por su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El id del heroe a obtener.
 *     responses:
 *       200:
 *         description: Detalles del heroe solicitado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Heroe'
 *       404:
 *         description: Heroe no encontrado.
 */

/**
 * @swagger
 * /heroes:
 *   post:
 *     summary: Añade un nuevo heroe.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - alias
 *               - habilidades
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: El nombre del heroe.
 *               alias:
 *                 type: string
 *                 description: El alias del heroe.
 *               habilidades:
 *                 type: string
 *                 description: Las habilidades del heroe.
 *     responses:
 *       201:
 *         description: Heroe añadido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: El id único asignado al heroe creado.
 *                 nombre:
 *                   type: string
 *                 alias:
 *                   type: string
 *                 habilidades:
 *                   type: string
 */

/**
 * @swagger
 * /heroes/{id}:
 *   put:
 *     summary: Actualiza un heroe existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El id del heroe a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: El nombre del heroe.
 *               alias:
 *                 type: string
 *                 description: El alias del heroe.
 *               habilidades:
 *                 type: string
 *                 description: Las habilidades del heroe.
 *     responses:
 *       200:
 *         description: Heroe actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 alias:
 *                   type: string
 *                 habilidades:
 *                   type: string
 *       404:
 *         description: Heroe no encontrado.
 */

/**
 * @swagger
 * /heroes/{id}:
 *   delete:
 *     summary: Elimina un heroe.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El id del heroe a eliminar.
 *     responses:
 *       200:
 *         description: Heroe eliminado exitosamente.
 *       404:
 *         description: Heroe no encontrado.
 */



let heroes = [
  {
    "id": 1,
    "nombre": "peter Parker",
    "alias": "Spider-Man",
    "habilidades": "Agilidad sobrehumana, Reflejos, Sentido arácnido, Adherencia a las superficies"
  },
  {
    "id": 2,
    "nombre": "tony Stark",
    "alias": "Iron Man",
    "habilidades": "Genio intelectual, Multimillonario, Experto en combate, Armadura de alta tecnología"
  },
  {
    "id": 3,
    "nombre": "steve Rogers",
    "alias": "Capitán América",
    "habilidades": "Fuerza sobrehumana, Agilidad, Velocidad, Resistencia, Maestro táctico"
  },
  {
    "id": 4,
    "nombre": "bruce Banner",
    "alias": "Hulk",
    "habilidades": "Fuerza inmensurable, Resistencia, Velocidad sobrehumanas, Capacidad de regeneración"
  },
  {
    "id": 5,
    "nombre": "thor Odinson",
    "alias": "Thor",
    "habilidades": "Fuerza divina, Manipulación del clima, Vuelo, Longevidad"
  },
  {
    "id": 6,
    "nombre": "natasha Romanoff",
    "alias": "Black Widow",
    "habilidades": "Experta en artes marciales, Maestría en espionaje, Atleta olímpica"
  },
  {
    "id": 7,
    "nombre": "clint Barton",
    "alias": "Hawkeye",
    "habilidades": "Maestro arquero, Habilidades acrobáticas, Experto en combate cuerpo a cuerpo"
  },
  {
    "id": 8,
    "nombre": "t'Challa",
    "alias": "Black Panther",
    "habilidades": "Fuerza sobrehumana, Velocidad, Agilidad, Sentidos agudizados, Genio intelectual"
  },
  {
    "id": 9,
    "nombre": "stephen Strange",
    "alias": "Doctor Strange",
    "habilidades": "Maestro de las artes místicas, Manipulación de dimensiones, Vuelo, Proyección astral"
  },
  {
    "id": 10,
    "nombre": "carol Danvers",
    "alias": "Captain Marvel",
    "habilidades": "Fuerza sobrehumana, Vuelo, Resistencia, Proyección y absorción de energía"
  }];

let nextId = 10;

// GET: Obtener todos los elementos
router.get('/heroes', (req, res) => {
  const { nombre } = req.query;

  const filteredheroes = nombre
    ? heroes.filter(item => item.nombre.toLowerCase().includes(nombre.toLowerCase()))
    : heroes;
  res.json(filteredheroes);
});

// POST: Añadir un nuevo elemento
router.post('/heroes', (req, res) => {
  const { nombre, alias, habilidades } = req.body;
  const item = { id: nextId++, nombre, alias, habilidades };
  heroes.push(item);
  res.status(201).json(item);
});

// PUT: Actualizar un elemento
router.put('/heroes/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, alias, habilidades } = req.body;

  const index = heroes.findIndex(item => item.id === parseInt(id));

  if (index >= 0) {
    const updatedItem = { id: heroes[index].id, nombre, alias, habilidades };
    heroes[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

// DELETE: Eliminar un elemento
router.delete('/heroes/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = heroes.length;
  heroes = heroes.filter(item => item.id !== parseInt(id));

  if (heroes.length < initialLength) {
    res.send('Item deleted');
  } else {
    res.status(404).send('Item not found');
  }
});
  
  module.exports = router;
  