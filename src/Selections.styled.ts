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
	position: relative;
	.loader {
		border: 16px solid palevioletred; /* Light grey */
		border-top: 16px solid #3498db; /* Blue */
		border-radius: 50%;
		width: 120px;
		height: 120px;
		animation: spin 2s linear infinite;
		position: absolute;
		/* top: 50%;
		left: 50%; */
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
