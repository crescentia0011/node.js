// 컨트롤(라우트 핸들러).

const boardService = require("../services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  res.json(rows);
};
//상세조회
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

// 등록(create)
const create = async (req, res) => {
  try {
    const [result] = await boardService.create(req.body);
    res.json(result);
  } catch (err) {
    console.error("DB 에러 발생:", err.message);
    res.status(500).send(err.message);
  }
};

module.exports = { list, detail, create };
