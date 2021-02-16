import styled from "styled-components";

export const Container = styled.div`
	margin-bottom: 0.8em;
	display: flex;
	align-items: center;
	.img2 {
		display: none;
	}
	:nth-child(even) {
		margin-left: auto;
		flex-direction: row-reverse;
		.img2 {
			display: flex;
		}
		.img {
			display: none;
		}
	}
`;
export const List = styled.div`
	/* background-color: gainsboro; */
	background-color: palevioletred;
	padding: 13px 10px;
	border-radius: 4px;
	width: 20em;
	color: white;
	font-size: 13px;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
	/* margin-bottom: 0.8em; */
	display: flex;
	/* margin-right: auto; */
	/* :nth-child(even) {
		margin-left: auto;
	} */
`;

export const Img = styled.img`
	display: flex;
	:nth-child(even) {
		display: none;
	}
`;
