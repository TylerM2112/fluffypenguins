import React from 'react';
import './MemberTile.scss';

const MemberTitle = (props) => {
  let {userImg, userName, userType} = props.user;
  console.log(props);
  return (
    <div className="member-comp">
      <img src={ userImg } alt={ userName } />
      <p className="headerText">{ userName }</p>
      <p className="bodyText grey-text">{ userType }</p>
  </div>
  );
};

export default MemberTitle;