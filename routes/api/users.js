const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/signUp"
router.route("/signup")
  .post(userController.createUser) //pushes the data to ../../controllers/userController and calls createUser

  // Matches with "/api/users/login"
router.route("/login")
  .post(userController.findUser)

router.route("/cookie")
  .get(userController.findCookie)


  module.exports = router;