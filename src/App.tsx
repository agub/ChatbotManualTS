import React, { useState, useEffect } from 'react'
import {
	QUESTIONS,
	CONVERSATION,
	Additional,
	FIRST_QUESTIONS,
	QUESTIONS0_options,
	QUESTIONS1_options,
	QUESTIONS2_options,
	QUESTIONS3_options,
	QUESTIONS2_0_options,
	QUESTIONS2_1_options,
	QUESTIONS2_2_options,
	QUESTIONS2_3_options,
	QUESTIONS3_0_options,
	QUESTIONS3_2_options,
} from './listing'

import Selections from './Selections'
import Chat from './Chat'

import { Container } from './App.styled'

import { createGlobalStyle } from 'styled-components'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [conversation, setConversation] = useState<string[]>([])
	const [questions, setQuestions] = useState<string[] | null>([])

	const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

	const initialize = () => {
		setConversation([CONVERSATION.CONVERSATION_FIRST])
		setQuestions(FIRST_QUESTIONS)
	}

	const directTo = (link: string) => {
		const Alink = () => {
			window.location.href = link
		}
		setTimeout(Alink, 2000)
	}

	const loadingConversation = (
		conversation: string,
		question: string[] | null
	) => {
		setTimeout(() => setIsLoading(true), 300)
		setTimeout(
			() => setConversation((prev) => [...prev, conversation]),
			1000
		)
		setTimeout(() => setQuestions(question), 1000)
		setTimeout(() => setIsLoading(false), 1000)
	}

	useEffect(() => {
		const unsub = initialize()
		return unsub
	}, [])

	/////------------------------------------------------------------------

	const clickHandler = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault()
		setQuestions(null)
		switch (e.currentTarget.value) {
			//first QUESTIONS----------------
			//

			case QUESTIONS.QUESTION_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_0])
				loadingConversation(
					CONVERSATION.CONVERSATION_0,
					QUESTIONS0_options
				)
				break
			case QUESTIONS.QUESTION_1:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_1])
				loadingConversation(
					CONVERSATION.CONVERSATION_1,
					QUESTIONS1_options
				)
				break
			case QUESTIONS.QUESTION_2:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2])
				loadingConversation(
					CONVERSATION.CONVERSATION_2,
					QUESTIONS2_options
				)
				break
			case QUESTIONS.QUESTION_3:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_3])
				loadingConversation(
					CONVERSATION.CONVERSATION_3,
					QUESTIONS3_options
				)
				break

			//SECOND QUESTIONS

			//----------------------- QUESTION 0s--------------------
			case QUESTIONS.QUESTION_0_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_0_0])
				loadingConversation(CONVERSATION.CONVERSATION_0_0, null)
				directTo('https://google.com/contact')
				break
			case QUESTIONS.QUESTION_0_1:
				initialize()
				break
			//----------------------- QUESTION 1s-----------done!!!-------
			case QUESTIONS.QUESTION_1_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_1_0])
				loadingConversation(CONVERSATION.CONVERSATION_1_0, null)
				directTo('https://www.softbank.jp/mobile/products/')
				break
			case QUESTIONS.QUESTION_1_1:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_1_1])
				loadingConversation(CONVERSATION.CONVERSATION_1_1, null)
				directTo('https://www.softbank.jp/mobile/products/')
				break
			case QUESTIONS.QUESTION_1_2:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_1_2])
				loadingConversation(CONVERSATION.CONVERSATION_1_2, null)
				directTo('https://www.softbank.jp/mobile/products/')
				break
			case QUESTIONS.QUESTION_1_3:
				setQuestions(Additional)
				break
			//----------------------- QUESTION 2s--------------------
			case QUESTIONS.QUESTION_2_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_0])
				loadingConversation(
					CONVERSATION.CONVERSATION_2_0,
					QUESTIONS2_0_options
				)
				break
			case QUESTIONS.QUESTION_2_1:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_1])

				loadingConversation(
					CONVERSATION.CONVERSATION_2_1,
					QUESTIONS2_1_options
				)
				break
			case QUESTIONS.QUESTION_2_2:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_2])

				loadingConversation(
					CONVERSATION.CONVERSATION_2_2,
					QUESTIONS2_2_options
				)
				break
			case QUESTIONS.QUESTION_2_3:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_3])
				loadingConversation(
					CONVERSATION.CONVERSATION_2_3,
					QUESTIONS2_3_options
				)
				break
			//----------------------- QUESTION 3s--------------------
			case QUESTIONS.QUESTION_3_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_3_0])
				loadingConversation(
					CONVERSATION.CONVERSATION_3_0,
					QUESTIONS3_0_options
				)
				// directTo("https://www.softbank.jp/mobile/products/");
				break

			case QUESTIONS.QUESTION_3_1:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_3_1])
				loadingConversation(CONVERSATION.CONVERSATION_3_1, Additional)
				break
			case QUESTIONS.QUESTION_3_2:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_3_2])
				loadingConversation(
					CONVERSATION.CONVERSATION_3_2,
					QUESTIONS3_2_options
				)
				break

			//THIRD QUESTIONS
			//----------------------- QUESTION 0_0-------------------
			//NONE
			//----------------------- QUESTION 1_0-------------------
			//NONE
			//----------------------- QUESTION 2_0-------------------

			case QUESTIONS.QUESTION_2_0_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_0_0])
				loadingConversation(CONVERSATION.CONVERSATION_2_0_0, null)
				directTo('https://www.softbank.jp/mobile/products/')
				break
			case QUESTIONS.QUESTION_2_0_1:
				setQuestions(Additional)
				break
			//----------------------- QUESTION 2_1-------------------
			case QUESTIONS.QUESTION_2_1_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_1_0])
				loadingConversation(CONVERSATION.CONVERSATION_2_1_0, null)
				directTo('https://www.softbank.jp/mobile/products/')
				break
			case QUESTIONS.QUESTION_2_1_1:
				setQuestions(Additional)
				break
			//----------------------- QUESTION 2_2-------------------
			case QUESTIONS.QUESTION_2_2_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_2_0])
				loadingConversation(CONVERSATION.CONVERSATION_2_2_0, null)
				directTo('https://www.softbank.jp/mobile/products/')
				break
			case QUESTIONS.QUESTION_2_2_1:
				setQuestions(Additional)
				break
			//----------------------- QUESTION 2_3-------------------
			case QUESTIONS.QUESTION_2_3_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_2_3_0])
				loadingConversation(CONVERSATION.CONVERSATION_2_3_0, null)
				directTo('https://google.com/contact')
				break
			case QUESTIONS.QUESTION_2_3_1:
				setQuestions(Additional)
				break
			//----------------------- QUESTION 3_3-------------------
			case QUESTIONS.QUESTION_3_0_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_3_0_0])
				loadingConversation(CONVERSATION.CONVERSATION_3_0_0, null)
				directTo('https://google.com/contact')
				break
			case QUESTIONS.QUESTION_3_0_1:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_3_0_1])
				loadingConversation(CONVERSATION.CONVERSATION_3_0_1, null)
				directTo('https://google.com/contact')
				break
			case QUESTIONS.QUESTION_3_0_2:
				setQuestions(Additional)
				break
			case QUESTIONS.QUESTION_3_2_0:
				setConversation((prev) => [...prev, QUESTIONS.QUESTION_3_2_0])
				loadingConversation(CONVERSATION.CONVERSATION_3_2_0, null)
				break
			case QUESTIONS.QUESTION_3_2_1:
				setQuestions(Additional)
				break
			default:
				setQuestions(Additional)
		}
	}

	return (
		<Container className='App'>
			<GlobalStyle />
			<Chat conversation={conversation} isLoading={isLoading} />
			<Selections questions={questions} clickHandler={clickHandler} />
		</Container>
	)
}

export default App
