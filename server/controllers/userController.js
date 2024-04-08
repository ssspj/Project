const db = require("../database/db.js"); // db.js 파일의 경로에 맞게 수정

// 회원가입 로직
exports.signup = (req, res) => {
  const { username, password, email } = req.body;
  const sql = `INSERT INTO usertable (username, password, email) VALUES (?, ?, ?)`;
  db.query(sql, [username, password, email], (err, result) => {
    if (err) {
      console.error("회원가입에 실패했습니다:", err);
      res
        .status(500)
        .json({ success: false, message: "회원가입에 실패했습니다" });
      return;
    }
    console.log("회원가입에 성공했습니다.");
    res.json({ success: true, message: "회원가입에 성공했습니다" });
  });
};

// 로그인 로직
exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM usertable WHERE email = ? AND password = ?`;
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("오류가 발생했습니다:", err);
      res
        .status(500)
        .json({ success: false, message: "로그인에 오류가 발생했습니다" });
      return;
    }
    if (result.length > 0) {
      console.log("로그인에 성공했습니다.");
      res.json({ success: true, message: "로그인에 성공했습니다!" });
    } else {
      console.log("올바른 이메일과 비밀번호를 입력해주세요.");
      res
        .status(401)
        .json({
          success: false,
          message: "올바른 이메일과 비밀번호를 입력해주세요!",
        });
    }
  });
};

// 중복 확인 로직
exports.checkUsername = (req, res) => {
  const { username } = req.body;
  const sql = `SELECT * FROM usertable WHERE username = ?`;
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error("중복 오류입니다.:", err);
      res.status(500).json({ success: false, message: "중복 오류입니다." });
      return;
    }
    if (result.length > 0) {
      // 중복된 username이 존재함을 클라이언트에게 알립니다.
      res.json({ available: false });
    } else {
      // 사용 가능한 username임을 클라이언트에게 알립니다.
      res.json({ available: true });
    }
  });
};
