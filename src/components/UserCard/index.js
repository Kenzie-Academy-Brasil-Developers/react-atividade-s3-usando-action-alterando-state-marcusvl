import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import "./index.css";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const actualName = useSelector((store) => store.user.name);
  const handleClick = () => dispatch(changeName(newName));
  console.log("actualName", actualName);

  return (
    <div>
      <h2>User name: {actualName}</h2>
      <input
        type="text"
        value={newName}
        placeholder="username..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleClick}>Change user</button>
    </div>
  );
};

export default UserCard;
