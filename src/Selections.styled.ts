import styled from "styled-components";

export const Button = styled.button`
	cursor: pointer;
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin-top: 0.5em;
	padding: 0.25em 1em;
	width: 100%;
	&:hover {
		color: white;
		background-color: palevioletred;
	}
`;

export const Container = styled.div`
	text-align: center;
	/* display: flex; */
	/* flex-direction: column; */
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	height: 400px;
	margin-bottom: 8px;
`;
