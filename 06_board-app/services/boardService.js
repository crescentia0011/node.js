// 업무
const boardModel = require("../models/boardModel");
// 서비스 - 모델 : 1:1매칭.

// 글목록조회 업무.

async function getList() {
  return boardModel.getList();
}
// 단건조회

async function getDetail(id) {
  return boardModel.getById(id);
}

// 등록(create)
async function create(data) {
  return boardModel.insert(data);
}

module.exports = { getList, getDetail, create };
