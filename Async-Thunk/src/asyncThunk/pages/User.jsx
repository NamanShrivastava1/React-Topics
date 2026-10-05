import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../state/async.slice.js";

const User = () => {
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.user);

  const handleFetchUser = () => {
    dispatch(fetchUser());
  };

  return (
    <div>
      <h1>User</h1>
      <button onClick={handleFetchUser}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      )}
    </div>
  );
};

export default User;
