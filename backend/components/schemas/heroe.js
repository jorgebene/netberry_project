/**
 * @swagger
 * components:
 *   schemas:
 *     Heroe:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - alias
 *         - habilidades
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único
 *         nombre:
 *           type: string
 *           description: Nombre del héroe
 *         alias:
 *           type: string
 *           description: Alias del héroe
 *         habilidades:
 *           type: string
 *           description: habilidades principales
 *       example:
 *         id: 1
 *         nombre: Thor Odinson
 *         alias: Thor
 *         habilidades: Semidios, veloz, ágil
 */