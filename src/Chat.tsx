import React from "react";
import { Container, Img, List } from "./Chat.styled";
import chatBotImg from "./image/chat-bot.png";
import userIcon from "./image/User Icon.jpeg";

interface Props {
	conversation: string[];
	isLoading: boolean;
}

const Chat: React.FC<Props> = ({ conversation, isLoading }) => {
	return (
		<div style={{ width: "100%" }}>
			{conversation.map((string) => (
				<Container key={string}>
					<Img
						className='img'
						src={chatBotImg}
						alt=''
						width='50px'
						height='50px'
					/>
					<img
						className='img2'
						src={userIcon}
						alt=''
						width='50px'
						height='50px'
					/>
					<List>{string}</List>
				</Container>
			))}
			{isLoading ? <p>....</p> : null}
		</div>
	);
};

export default Chat;
