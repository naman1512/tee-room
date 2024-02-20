import express, { Router } from 'express';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseApiUrl: 'https://api.openai.com',
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

app.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.create({
      prompt,
      n: 1,
      size: '1024px*1024px',
      responseType: 'url',
    });

    const imageUrl = response.data.images[0].url;

    res.status(200).json({ photoUrl: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default Router;