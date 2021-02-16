import React from "react";
import { Button, Container } from "./Selections.styled";

type Props = {
	questions: string[] | null;
	clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Selections: React.FC<Props> = ({ questions, clickHandler }) => {
	return (
		<Container>
			{questions?.map((question) => (
				<Button key={question} value={question} onClick={clickHandler}>
					{question}
				</Button>
			))}
		</Container>
	);
};

export default Selections;
