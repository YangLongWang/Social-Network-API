const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought
} = require('../../controllers/thought-controller');

// set up GET all and POST at /api/thoughts/
router
  .route('/')
  .get(getAllThought)
  .post(addThought);

// set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)


module.exports = router;