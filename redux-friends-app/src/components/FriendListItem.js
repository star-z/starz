import React from 'react';
import styles from './FriendListItem.css';

function FriendListItem(props) {
    const { name, starred, starFriend, deleteFriend } = props;

    let starClassName = 'fa fa-star-o'
    if(starred){
      starClassName = 'fa fa-star'
    }


    return (

      <li className="friendListItem">
        <div className="friendInfos">
          <div>
            <span>{props.name}</span>
          </div>
        </div>
        <div className="friendActions">
          <button className="btn btn-default" onClick={() => starFriend(props.id)}>
            <i className={starClassName} />
          </button>
          <button className="btn btn-default" onClick={() => deleteFriend(props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>

    );
}

export default FriendListItem;
