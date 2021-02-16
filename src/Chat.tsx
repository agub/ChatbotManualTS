import React from "react";
import { Container } from "./Chat.styled";

interface Props {
	conversation: string[];
	isLoading: boolean;
}

const Chat: React.FC<Props> = ({ conversation, isLoading }) => {
	return (
		<div>
			{conversation.map((string) => (
				<Container key={string}>{string}</Container>
			))}
			{isLoading ? <p>....</p> : null}
		</div>
	);
};

export default Chat;
