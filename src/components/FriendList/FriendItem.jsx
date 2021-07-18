import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
  const onlineC = `${css.status} ${isOnline ? css.online : css.offline}`;
  return (
    <li className={css.friend__item}>
      <span className={onlineC}></span>
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
