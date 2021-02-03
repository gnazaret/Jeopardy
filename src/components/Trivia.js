import React from 'react';

export default function Trivia(props) {
	return (
		<div>
			<h1> Question : {props.trivia.question}</h1>
			<h2>Answer :{props.trivia.answer}</h2>
			<h2>Points : {props.trivia.value}</h2>
			<h2>Category : {props.trivia.category.title}</h2>
		</div>
	);
}
