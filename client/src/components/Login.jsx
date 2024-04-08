import React, { useState } from "react";
import axios from "axios"; // 로그인 요청을 보내기 위해 axios를 사용합니다.
import { Link, useNavigate } from "react-router-dom"; // useHistory를 import
import "../styles/Login.css";

function Login() {
  // 로그인 폼의 상태를 관리하기 위한 useState 훅을 사용합니다.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useHistory 훅 사용

  // 로그인 폼을 제출할 때 실행되는 함수입니다.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 사용자의 입력값을 서버로 전송하여 로그인을 시도합니다.
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data); // 서버로부터 받은 응답을 콘솔에 출력합니다.
      // 로그인이 성공하면 다음 작업을 수행할 수 있습니다.
      navigate("/main"); // 메인 페이지로 이동
    } catch (error) {
      // 로그인에 실패하면 에러 메시지를 설정합니다.
      alert("로그인에 실패하였습니다.");
    }
  };

  return (
    <div className="login">
      <div className="login_main">
        <h2>로그인</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="inputTag">
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="input_id">
              이메일 <span style={{ paddingLeft: "5px", color: "red" }}>*</span>
            </label>
          </div>

          <div style={{ marginTop: "26px" }} />

          <div className="inputTag">
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="input_pw">
              비밀번호{" "}
              <span style={{ paddingLeft: "5px", color: "red" }}>*</span>
            </label>
          </div>
          <div style={{ marginTop: "26px" }} />
          <button id="login_btn" type="submit">
            로그인
          </button>
          <p className="link_box" style={{ textAlign: "center" }}>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
          {/* <Link to='#'>비밀번호를 잊어버리셨나요?</Link> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
