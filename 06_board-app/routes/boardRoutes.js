// routes
const router = require("express").Router();
const ctrl = require("../controllers/boardController");
// 조회(get요청).
router.get("/", ctrl.list); //http://localhost:3000/board
router.get("/:id", ctrl.detail);

// CUD
router.post("/create", ctrl.create);

module.exports = router;
