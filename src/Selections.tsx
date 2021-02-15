import React from "react";

type Props = {
	questions: string;
};

const Selections: React.FC<Props> = ({ questions }) => {
	console.log(questions);
	return <div>selections!</div>;
};

export default Selections;
