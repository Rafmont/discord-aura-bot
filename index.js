const Discord = require("discord.js");

const bot = new Discord.Client();

const token = "NzQ2MTcyNTcxNzI4MjE2MTE1.Xz8dXA._5pEpEZl_pSJR9R40VQZ1BhyHkM";

bot.on("ready", () => {
  console.log("bot running!");
});

bot.on("message", (msg) => {
  let message = msg.content.toLocaleLowerCase();

  //Travar o Juan.
  let result = message.search("https://twitch.tv/trindadelol");
  if (result != -1) {
    msg.delete();
    msg.reply("Hoje não amigo!");
  }

  //Rola um D20
  if (message === "=>d20") {
    let resultado = Math.floor(Math.random() * (20 - 1) + 1);
    msg.delete();
    msg.reply("rodou um D20 e tirou " + resultado + ".");
  }

  //Apresentar o watch2gether
  if (message === "=>w2g") {
    msg.delete();
    msg.reply(
      " claro, aqui está o link do nosso watch2gether: https://tinyurl.com/y23p2lyq"
    );
  }

  //Aprensentar o Drive
  if (message === "=>drive") {
    msg.delete();
    msg.reply(
      " claro, aqui está o link do nosso drive: https://tinyurl.com/yyf23k7x"
    );
  }

  //Reagir com BIRB
  if (
    msg.author.username === "Rainbow Kira" ||
    msg.author.username === "Netuno"
  ) {
    msg.react("439290612324499456");
  }
});

bot.login(token);
