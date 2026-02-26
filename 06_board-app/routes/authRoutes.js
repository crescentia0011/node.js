// routes
const router = require("express").Router();
const ctrl = require("../controllers/authController");
// 조회(get요청).
// router.get("/", ctrl.list); //http://localhost:3000/board
// router.get("/:id", ctrl.detail);

// CUD
router.post("/", ctrl.signup);
router.post("/login", ctrl.login);

module.exports = router;
