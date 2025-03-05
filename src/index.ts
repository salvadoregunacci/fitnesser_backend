import express, {Express} from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

const app: Express = express();
const PORT: string | undefined = process.env.PORT;
const TOKEN: string = process.env.BOT_TOKEN || "";
const bot: TelegramBot = new TelegramBot(TOKEN, {polling: true});


bot.onText(/\/start/, async (msg: TelegramBot.Message): Promise<void> => {
    await bot.sendMessage(msg.chat.id, `
Привет! 🖐 

Я - фитнесс-бот 😎
У меня есть готовая программа тренировки именно для тебя 🙌

Ну что, погнали? 🚀
   `, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "✅ Погнали",
                        web_app: {
                            url: process.env.FRONTEND_URL ?? ""
                        }
                    }
                ]
            ]
        }
    });
});

app.listen(PORT, (): void => {
    console.log(`Server start on ${PORT} port`);
});