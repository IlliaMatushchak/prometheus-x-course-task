import "../assets/Signin.css";
import avatarImg from "../assets/images/avatar.png";

import { useNavigate } from "react-router-dom";

function Signin({
  userNameState: { userName, setUserName },
  userLoggedState: { userIsLoggedIn, setUserIsLoggedIn },
}) {
  const navigate = useNavigate();

  function validateUserName(name) {
    return name.length >= 4 && name.length <= 16;
  }

  function autorisizeUser(name) {
    if (validateUserName(name)) {
      setUserIsLoggedIn(true);
    }
  }

  return (
    <>
      <div className="signin-container">
        <img src={avatarImg} alt="Avatar" />
        <form action="#" method="post">
          <div>
            <label htmlFor="user-name">User name</label>
            <input
              type="text"
              name="userName"
              id="user-name"
              placeholder="Type your name"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!validateUserName(userName)}
            onClick={() => {
              autorisizeUser(userName);
              navigate("/book-list");
            }}
          >
            Sign-in
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
