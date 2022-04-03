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
const node_fetch_1 = __importDefault(require("node-fetch"));
const discord_js_1 = __importDefault(require("discord.js"));
const client = new discord_js_1.default.Client({
    shards: "auto",
});
client.login(process.env.TOKEN);
function getPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        const raw = yield (0, node_fetch_1.default)("https://api.coinbase.com/v2/prices/eth-usd/spot");
        const { data } = (yield raw.json());
        return data.amount;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        client
            .user.setActivity(`$${yield getPrice()}`, { type: "WATCHING" })
            .then((presence) => console.log(`Activity set to ${presence.activities[0].name}`))
            .catch((err) => console.log(err));
    });
}
setInterval(() => main(), 30000);
