import {config} from "dotenv"
config()

import {Configuration, OpenAIApi} from "openai"

const {API_KEY} = process.env

const openai = new OpenAIApi(new Configuration({
    apiKey:  process.env
}))

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "hello ChatGPT"}]

})