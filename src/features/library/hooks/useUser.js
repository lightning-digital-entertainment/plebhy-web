import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../userSlice';
import { User } from '../utils';
import { getKind0 } from '../utils/nostr';

const useUser = (pk) => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  if (!pk) {
    return undefined;
  }
  const getUser = async () => {
    const newUserEvent = await getKind0(pk);
    if (!newUserEvent) {
      return undefined;
    }
    const newUser = new User(newUserEvent);
    return dispatch(addUser(newUser));
  };
  const existing = users.filter((u) => u.pubkey === pk);
  if (existing.length > 0) {
    return existing[0];
  }
  getUser();
  return undefined;
};

export default useUser;
