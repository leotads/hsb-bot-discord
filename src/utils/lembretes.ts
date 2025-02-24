import { Client, TextChannel } from "discord.js";

// Função para verificar a hora e enviar o lembrete
export function lembreteRM(horario: number = 16, minutos: Number = 0, client: Client, channel: string, message: string): void {
  const agora = new Date();
  const horaAtual = agora.getHours();
  const minutosAtual = agora.getMinutes();

  if (horaAtual === horario && minutosAtual === minutos) {
      console.log("Lembrete enviado".blue)
      const canal = client.channels.cache.get(channel) as TextChannel;
      if (canal) {
          canal.send({
            content: message,
            allowedMentions: { parse: ["everyone"] }
          });
      }
  }
}