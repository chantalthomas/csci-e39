<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="pageWrapper">
			<div  className="header">
				<h1>Upload Images</h1>
			</div>	
			{/* do not delete this uploader component */}
			<Uploader upload={actions.upload} />
			{/* do not delete this uploader component */}

			<h2>In Progress</h2>
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<label>{name}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
				})}
			</ul>

			<h2>Completed</h2>
			<ul>
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <li key={id}>
						<label>{name}</label>
						{!error && <img src={url} style={{maxWidth: `200px`}} />}
						{!!error && <p className="failure">{error}</p>}
					</li>
				})}
			</ul>
	</div>
=======
import React from "react";
import PropTypes from "prop-types";
import Uploader from "../../ui/components/uploader.jsx";
import Pending from "./in-progress-images.jsx.js";
import Completed from "./completed-images.jsx.js";
class Uploads extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uploadProgress: null
		};
	}
	render() {
		const pendingFiles = this.props.uploads.files.filter(
			({ progress }) => progress && progress < 100
		);
		const completedFiles = this.props.uploads.files.filter(
			({ progress }) => !progress
		);
		return (
			<div>
				<h1 className="uploader">Upload Images</h1>
				{/* do not delete this uploader component */}
				<Uploader upload={this.props.actions.upload} />
				{/* do not delete this uploader component */}
				<Pending pendingFiles={pendingFiles} />
				<Completed completedFiles={completedFiles} />
			</div>
		);
	}
>>>>>>> 00eee64b9e0fc1e09df16e85b9c9ee3096c76340
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`])
		.isRequired,
	message: PropTypes.string.isRequired
});

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
					.isRequired,
				name: PropTypes.string.isRequired,
				progress: PropTypes.number,
				url: PropTypes.string,
				error: PropTypes.string
			})
		).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired
	}).isRequired,
	actions: PropTypes.object.isRequired
};

export default Uploads;
