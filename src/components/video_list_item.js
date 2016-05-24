import React from 'react';

const VideoListItem = ({video}) => {
//  const video = props.video;
// curly brackets with video is equal to if it was just props
// like (props) and then line 4
const imageUrl = video.snippet.thumbnails.default.url
  return (
    <li className="list-group-item">
      <div className="video-list media">

       <div className="media-left">
        <img className="media-object" src={imageUrl}/>
       </div>
       <div className="media-body">
        <div className="media-heading">
         {video.snippet.title}
        </div>
       </div>

      </div>
    </li>
  )
};

export default VideoListItem;
