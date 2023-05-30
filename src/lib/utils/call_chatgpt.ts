export async function call_chatgpt(prompt: string) {



	const response = await fetch(`/api/chatGPT`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			prompt: prompt,
			max_tokens: 200
		})
	});

	const data = await response.json();

	return data;
}
