const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controllers');

// set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
// populated thought and friend data

// set up POST and DELETE at /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;