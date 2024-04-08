const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// 회원가입 엔드포인트
router.post("/signup", userController.signup);

// 로그인 엔드포인트
router.post("/login", userController.login);

// 중복 확인 라우트
router.post("/checkUsername", userController.checkUsername);

module.exports = router;
