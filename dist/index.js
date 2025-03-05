"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const TOKEN = process.env.BOT_TOKEN || "";
const bot = new node_telegram_bot_api_1.default(TOKEN, { polling: true });
bot.onText(/\/start/, (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield bot.sendMessage(msg.chat.id, `
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
                            url: (_a = process.env.FRONTEND_URL) !== null && _a !== void 0 ? _a : ""
                        }
                    }
                ]
            ]
        }
    });
}));
app.listen(PORT, () => {
    console.log(`Server start on ${PORT} port`);
});
