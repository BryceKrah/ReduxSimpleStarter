import React from 'react';

const VideoDetail = (props) => {

	const videoId = video.id.videoId;
	//const url = 'https://www.youtube.com/embed/' + videoId;
	// ES6 string interpolation
	const url = `https://www.youtube.com/embed/${videoId}`;


	return (
		<div className="video-detail col-md-8">
			<div classname="embed-responsive embed-responsive-16by9">
				<iframe classname="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)

};

export default VideoDetail;