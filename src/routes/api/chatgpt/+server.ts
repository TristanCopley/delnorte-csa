const CHAT_GPT_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const apiKey = 'YOUR_API_KEY';

export async function POST({ request, fetch }) {
	const body = await request.json();

	const response = await fetch(`${CHAT_GPT_API_URL}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}` 
		},
		body: JSON.stringify(body)
	});

	const data = await response.json();

	return new Response(
		JSON.stringify({
			status: {
				id: 0,
				description: 'Failed to get token'
			},
			stdout: 'FATAL ERROR : NULL',
			stderr: 'Failed to get token',
			time: null,
			memory: null
		}),
		{ status: 200 }
	);
}

  // OpenAI API endpoint and key
  const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const apiKey = 'YOUR_API_KEY';


    try {
      // Send the user message to the OpenAI API
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          prompt: message,
          max_tokens: 50
        })
      });

      const data = await response.json();

      // Add the AI response to the chat
      const aiMessage = data.choices[0].text.trim();
    } catch (error) {
      console.error(error);
    }
  }