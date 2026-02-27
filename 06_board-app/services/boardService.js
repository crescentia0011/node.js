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

// 삭제(remove)
async function remove(board_id, user) {
  // 1. 게시글 정보를 먼저 가져옵니다.
  const [rows] = await boardModel.getById(board_id); // 괄호()와 인자 추가
  const board = rows[0];

  if (!board) {
    throw new Error("존재하지 않는 게시글입니다.");
  }

  // 2. 권한 체크
  if (board.writer_id != user.member_id) {
    return "NO_AUTH";
  }

  // 3. 본인이 맞다면 삭제처리.
  return await boardModel.remove(board_id);
}
module.exports = { getList, getDetail, create, remove };
