import React from "react";
import PropTypes from "prop-types";

const ViewablePost = ({ post, editPost, deletePost }) => (
	<div className="post" key={`viewablePost${post.id}`}>
		<h2 className="post_title">{post.title}</h2>
		<p className="post_message">{post.message}</p>
		<p className="post_id">{"id: " + post.id}</p>
		<div className="control-buttons">
			<button
				className="edit"
				onClick={() =>
					editPost({
						id: post.id
					})
				}
			>
				Edit
			</button>
			<button
				className="delete"
				onClick={() =>
					deletePost({
						id: post.id
					})
				}
			>
				Delete
			</button>
		</div>
	</div>
);

ViewablePost.propTypes = {
	post: PropTypes.object.isRequired,
	editPost: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired
};

export default ViewablePost;
