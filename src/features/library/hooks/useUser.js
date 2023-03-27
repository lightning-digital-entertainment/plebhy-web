import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../userSlice';
import { getKind0 } from '../utils/nostr';

const useUser = (pk) => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const getUser = async () => {
    const newUser = await getKind0(pk);
    dispatch(addUser(newUser));
  };
  const existing = users.filter((u) => u.pubkey === pk);
  if (existing.length > 0) {
    return existing[0];
  }
  getUser();
  return undefined;
};

export default useUser;
