const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic : Interesting historical story along with AI Image prompt in Realistic format for each scene and give me the result in JSON format with ImagePrompt and ContentText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"video_script\": [\n    {\n      \"scene_number\": 1,\n      \"ImagePrompt\": \"A bustling 16th-century London street, photorealistic, cobblestone road wet from recent rain, wooden buildings with thatched roofs, merchants in period clothing hawking goods, a slight fog hangs in the air, warm sunlight peeking through clouds, high detail, 8K\",\n      \"ContentText\": \"London, 1590s. A city teeming with life, but beneath the surface, a clandestine world of espionage was brewing.\"\n    },\n    {\n      \"scene_number\": 2,\n       \"ImagePrompt\": \"A dimly lit tavern interior, realistic oil painting style, flickering candlelight, men in dark clothing huddled around a table, some with maps and letters, a sense of secrecy and intrigue in the air, soft lighting, high detail, 4K\",\n      \"ContentText\": \"In hidden taverns, like this one, Sir Francis Walsingham, the Queen's spymaster, wove his intricate web.\"\n    },\n    {\n      \"scene_number\": 3,\n       \"ImagePrompt\": \"A close-up, realistic rendering of a letter sealed with wax, intricate detail, showing the Tudor rose on the seal, a quill pen and inkwell nearby, aged parchment texture, slightly out of focus background, soft lighting, high detail, 4K\",\n      \"ContentText\": \"His agents, using coded letters and hidden messengers, gathered intel from all corners of Europe.\"\n    },\n    {\n      \"scene_number\": 4,\n      \"ImagePrompt\": \"A wide shot of the Tower of London at night, realistic painting style, moonlight casting long shadows, a single torch burning near one of the towers, a sense of foreboding and mystery, high detail, 8K\",\n      \"ContentText\": \"Their targets? Conspirators plotting against Queen Elizabeth and England, some ending their days in the infamous Tower of London.\"\n    },\n    {\n      \"scene_number\": 5,\n       \"ImagePrompt\": \"A realistic depiction of a disguised woman in period clothing, a cloak partially obscuring her face, a hidden letter tucked into her sleeve, a determined look in her eyes, urban background with brick buildings, soft lighting, high detail, 4K\",\n      \"ContentText\": \"Walsingham's network wasn't just men; women, too, played vital roles in uncovering secrets.\"\n     },\n      {\n      \"scene_number\": 6,\n      \"ImagePrompt\": \"A montage of quick cuts: a map being unfolded, a cipher being decoded, a coded message being burned,  realistic style,  dynamic camera movement, high detail, 4K\",\n      \"ContentText\":\"Their skills were diverse - code breaking, disguise, silent infiltration.\"\n    },\n     {\n      \"scene_number\": 7,\n       \"ImagePrompt\": \"A realistic close-up of a hand drawing a sword, partial view of a warrior's arm with armor visible, dramatic lighting, sense of urgency and danger,  high detail, 4K\",\n      \"ContentText\": \"Many of these secret operations involved incredible bravery, and the willingness to risk all.\"\n    },\n       {\n      \"scene_number\": 8,\n      \"ImagePrompt\": \"The Queen's portrait, realistic rendering in the style of a period painting, showing Queen Elizabeth I in regal attire, resolute expression, slightly faded look to suggest age, warm lighting, high detail, 4K\",\n      \"ContentText\": \"Thanks to their vigilance, Queen Elizabeth and her kingdom remained safe from the shadows.\"\n    },\n     {\n      \"scene_number\": 9,\n       \"ImagePrompt\": \"A panoramic view of the english countryside, realistic style, rolling hills, a winding road, a small village nestled among trees, clear blue sky with fluffy white clouds, sense of peace and tranquility, high detail, 8K\",\n       \"ContentText\": \"Their efforts helped shape England’s destiny, and this quiet corner of the world. \"\n     }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });