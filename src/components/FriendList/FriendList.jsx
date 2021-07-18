import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
//import friends from '../FriendList/friends.json';

import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
