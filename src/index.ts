import { Message } from "discord.js";
import { ExtendedClient } from "./structs/ExtendedClient";
import { obterSaudacao } from "./utils/saudacao";
import { lembreteRM } from "./utils/lembretes";

export * from "colors";

const client = new ExtendedClient();
client.start();

export { client }

client.once("ready", () => {
  console.log("BOT Online".green);

  // Verificar o horário a cada minuto
  setInterval(() => {
    lembreteRM(8, 10, client, "1254773331874414602", `@everyone Bom dia! Que seu dia de trabalho seja produtivo, leve e cheio de boas energias! ✨😊`);
    lembreteRM(8, 55, client, "1254773331874414602", `@everyone 😃 Ei, galera! Faltam só 5 minutinhos para a daily! Bora lá! 🚀☕ `);
    lembreteRM(9, 0, client, "1254773331874414602", `@everyone ⏳ Atenção, tripulação! A daily está prestes a começar! 🚀 Peguem seu café ☕ e venham para o check-in! 🎤`);
    lembreteRM(16, 30, client, "1254773331874414602", `@everyone 🔔 Lembrete: Não esqueça de preencher o RM! ✅`);
    lembreteRM(17, 0, client, "1254773331874414602", `@everyone 🔔 Lembrete: Não esqueça de preencher o RM! ✅`);
  }, 60000);
});

client.on("messageCreate", (message: Message) => {
  if (message.author.id === client.user?.id) return;
  
  // Verifica se o bot foi mencionado
  if (message.mentions.has(client.user!)) {
      const saudacao = obterSaudacao();
      message.reply({
        content: `Olá ${message.author.username}, ${saudacao}!`
      });
  }


})