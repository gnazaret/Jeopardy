import React, { useState, useEffect } from 'react';
import Trivia from './Trivia';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseUrl: 'http://jservice.io/api/random',
		newUrl: ''
	});

	const [trivia, setQuestion] = useState([]);
	console.log(trivia);
	useEffect(() => {
		(async () => {
			if (query.baseUrl) {
				try {
					const response = await fetch(query.baseUrl);
					const data = await response.json();
					await setQuestion(data);
				} catch (error) {
					console.error(error);

					// } finally {
					// 	updateQuery({
					// 		baseUrl: 'http://jservice.io/api/random',
					// 		newUrl: ''
					// 	});
				}
			}
		})();
	}, [query]);

	// const handleChange = event => {
	// 	updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	// };

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			newURL: query.newURL
		});
	};

	return (
		<div className="Page-wrapper">
			<h1>Jeopardy App</h1>
			<button onClick={e => updateQuestion(e.target.value)}>
				Get Question
			</button>

			<div className={'page'}></div>
			{trivia.length ? <Trivia trivia={trivia[0]} /> : ''}
		</div>
	);
}
