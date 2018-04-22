import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import Module from '../assignments/project-1/index.jsx'
=======
import Module from '../assignments/project-2/index.jsx'
>>>>>>> 00eee64b9e0fc1e09df16e85b9c9ee3096c76340

const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <span>Authorizing</span>
		case `failure`: return <span>{auth.message}</span>

		default: return <Module {...props} />
	}
}

export default App
