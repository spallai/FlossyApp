import React from "react";
import "./style.css"
// import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
// import 'react-activity-feed/dist/index.css';
// import { library }  from '@fortawesome/fontawesome-svg-core'
// import { far } from '@fortawesome/fontawesome-free-regular'
// import { fas } from '@fortawesome/fontawesome-free-solid'

// library.add(far, fas)


class Newsfeed extends React.Component {
  
  render() {
    return (
    <div className="container" >
      <div className="row">
        <div className="col m9 text-center">
            <h2>Newsfeed item1</h2>
            <h2>Newsfeed item2</h2>
            <h2>Newsfeed item3</h2>
        </div>
      </div>
    </div>
 

    )
};
};

export default Newsfeed;