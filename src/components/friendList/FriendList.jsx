import { FriendListItem } from './FriendListItem'; // data element
import PropTypes from 'prop-types'; // props
import css from './FriendList.module.css'; // styles component

// component props 
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
        {friends.map(friend => {
        return (
            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
    
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
