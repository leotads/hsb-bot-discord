export function obterSaudacao(hora: number = new Date().getHours()): string {
  if (hora >= 5 && hora < 12) return "Tenha um bom dia!";
  if (hora >= 12 && hora < 18) return "Tenha uma boa tarde!";
  return "Tenha uma boa noite!";
}