import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  candidateCount: 1,
  maxOutputTokens: 16384,
  responseMimeType: "application/json"
}

const safetySettings = {
  category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
}

export const chatSession = model.startChat({
  generationConfig,
  safetySettings
});
