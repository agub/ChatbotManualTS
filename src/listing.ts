export enum QUESTIONS {
	//FIRST!!!
	QUESTION_0 = "◯◯で予約をしたい",
	QUESTION_1 = "◯◯製品についての詳細を知りたい",
	QUESTION_2 = "◯◯会社にお問い合わせたい",
	QUESTION_3 = "その他のご用件がある",
	//----------------------------------------------------
	/// QUESTION 0s
	QUESTION_0_0 = "予約ページへ",
	QUESTION_0_1 = "最初の質問に戻る",

	/// QUESTION 1s
	QUESTION_1_0 = "製品◯◯について",
	QUESTION_1_1 = "製品◯1について",
	QUESTION_1_2 = "製品◯２について",
	QUESTION_1_3 = "その他の製品について",

	/// QUESTION 2s
	QUESTION_2_0 = "製作のことについて",
	QUESTION_2_1 = "出店店舗について",
	QUESTION_2_2 = "オンラインショップについて",
	QUESTION_2_3 = "その他について",

	/// QUESTION 3s
	QUESTION_3_0 = "◯◯の保証について",
	QUESTION_3_1 = "お問い合わせの電話番号",
	QUESTION_3_2 = "その他について",
	/// ---------------------------------------------------
	/// QUESTION 1_
	// 1
	QUESTION_1_0_0 = "◯◯製品のページへ飛ぶ",
	QUESTION_1_0_1 = "最初の質問に戻る",
	// 2
	QUESTION_1_1_0 = "◯◯1製品のページへ飛ぶ",
	QUESTION_1_1_1 = "最初の質問に戻る",
	//3
	QUESTION_1_2_0 = "◯◯1製品のページへ飛ぶ",
	QUESTION_1_2_1 = "最初の質問に戻る",
	//4
	QUESTION_1_3_0 = "その他の商品ページへ飛ぶ",
	QUESTION_1_3_1 = "最初の質問に戻る",
	//--------------------------------------------------------
	//QUESTION 2_
	// 1
	QUESTION_2_0_0 = "製作のお問い合わせ",
	QUESTION_2_0_1 = "最初の質問に戻る",
	// 2
	QUESTION_2_1_0 = "出店店舗のお問い合わせ",
	QUESTION_2_1_1 = "最初の質問に戻る",
	// 3
	QUESTION_2_2_0 = "オンラインショップについてのお問い合わせ",
	QUESTION_2_2_1 = "最初の質問に戻る",
	//4
	QUESTION_2_3_0 = "その他のお問い合わせ",
	QUESTION_2_3_1 = "最初の質問に戻る",
	//------------------------------------------------------
	// QUESTION 3
	//1
	QUESTION_3_0_0 = "◯◯の保証についてのページへ飛ぶ",
	QUESTION_3_0_1 = "◯◯の保証についてお問い合わせ",
	QUESTION_3_0_2 = "最初の質問に戻る",
	//2
	//   NONE
	//3
	QUESTION_3_2_0 = "その他のお問い合わせ",
	QUESTION_3_2_1 = "最初の質問に戻る",
}

export enum CONVERSATION {
	CONVERSATION_FIRST = "このサイトへようこそ！ご用件はなんでしょうか？",

	//CHAT_Q
	CONVERSATION_0 = "予約ページのボタンを押していただくと予約へ行きます！",
	CONVERSATION_1 = "どちらの商品についてでしょうか？",
	CONVERSATION_2 = "かしこまりました。ご用件は教えてください？",
	CONVERSATION_3 = "かしこまりました。ご用件は教えてください？",

	//CHAT_Q_0
	CONVERSATION_0_0 = "かしこまりました。予約ページへ移動します。",

	//CHAT_Q_1

	CONVERSATION_1_0 = "かしこまりました。製品◯◯の詳細へ移動します。",
	CONVERSATION_1_1 = "かしこまりました。製品◯◯1の詳細へ移動します。",
	CONVERSATION_1_2 = "かしこまりました。製品◯◯2の詳細へ移動します。",
	CONVERSATION_1_3 = "その他の製品詳細のページへ移動します。",
	// CHAT_Q_2
	CONVERSATION_2_0 = "製作のことについては下のボタンからお問い合わせください",
	CONVERSATION_2_1 = "出店店舗については下のボタンからお問い合わせください",
	CONVERSATION_2_2 = "オンラインショップについては下のボタンからお問い合わせください",
	CONVERSATION_2_3 = "その他についてはこちらからお問い合わせください",
	//CHAT_Q_3
	CONVERSATION_3_0 = "◯◯の保証については下のボタンから選んでください",
	CONVERSATION_3_1 = "お問い合わせの電話番号は　#090-2231-2312　です。　平日の９時から６時のみ対応が可能ですご了承ください",
	CONVERSATION_3_2 = "その他のお問い合わせは下のボタンを選んでください",

	//---------------------------
	//CHAT_Q_1
	//    NONE
	// CHAT_Q_2
	CONVERSATION_2_0_0 = "かしこまりました。製作の専用のお問い合わせページへ移動します",
	CONVERSATION_2_1_0 = "かしこまりました。出店店舗についてのお問い合わせのページへ移動します",
	CONVERSATION_2_2_0 = "かしこまりました。オンラインページののお問い合わせページへ移動します",
	CONVERSATION_2_3_0 = "かしこまりました。その他のお問い合わせページへ移動します",
	// CHAT_Q_3
	CONVERSATION_3_0_0 = "かしこまりました。保証についてのページへ移動します",
	CONVERSATION_3_0_1 = "かしこまりました。保証についてのお問い合わせへ移動します",
	CONVERSATION_3_2_0 = "かしこまりました。オンラインページののお問い合わせページへ移動します",
}

export const Additional = [QUESTIONS.QUESTION_0_1];

export const FIRST_QUESTIONS = [
	QUESTIONS.QUESTION_0,
	QUESTIONS.QUESTION_1,
	QUESTIONS.QUESTION_2,
	QUESTIONS.QUESTION_3,
];
export const QUESTIONS0_options = [
	QUESTIONS.QUESTION_0_0,
	QUESTIONS.QUESTION_0_1,
];
export const QUESTIONS1_options = [
	QUESTIONS.QUESTION_1_0,
	QUESTIONS.QUESTION_1_1,
	QUESTIONS.QUESTION_1_2,
	QUESTIONS.QUESTION_1_3,
];
export const QUESTIONS2_options = [
	QUESTIONS.QUESTION_2_0,
	QUESTIONS.QUESTION_2_1,
	QUESTIONS.QUESTION_2_2,
	QUESTIONS.QUESTION_2_3,
];
export const QUESTIONS3_options = [
	QUESTIONS.QUESTION_3_0,
	QUESTIONS.QUESTION_3_1,
	QUESTIONS.QUESTION_3_2,
];
///-------------------------------

export const QUESTIONS2_0_options = [
	QUESTIONS.QUESTION_2_0_0,
	QUESTIONS.QUESTION_2_0_1,
];
export const QUESTIONS2_1_options = [
	QUESTIONS.QUESTION_2_1_0,
	QUESTIONS.QUESTION_2_1_1,
];
export const QUESTIONS2_2_options = [
	QUESTIONS.QUESTION_2_2_0,
	QUESTIONS.QUESTION_2_2_1,
];
export const QUESTIONS2_3_options = [
	QUESTIONS.QUESTION_2_3_0,
	QUESTIONS.QUESTION_2_3_1,
];

export const QUESTIONS3_0_options = [
	QUESTIONS.QUESTION_3_0_0,
	QUESTIONS.QUESTION_3_0_1,
	QUESTIONS.QUESTION_3_0_2,
];
export const QUESTIONS3_2_options = [
	QUESTIONS.QUESTION_3_2_0,
	QUESTIONS.QUESTION_3_2_1,
];
