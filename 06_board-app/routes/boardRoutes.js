// routes
const router = require("express").Router();
const ctrl = require("../controllers/boardController");
const mid = require("../middleware/auth");
// 조회(get요청).
router.get("/", ctrl.list); //http://localhost:3000/board
router.get("/:id", ctrl.detail);

// CUD 로그인이 필요한 기능
router.post("/create", mid.authCheck, ctrl.create);
router.delete("/:id", mid.authCheck, ctrl.remove);

module.exports = router;
