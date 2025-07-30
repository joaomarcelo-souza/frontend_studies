// TypeScript (erro imediato no editor)
function calcularTotalTS(preco: number, quantidade: number): number {
  return preco * quantidade;
}

calcularTotalTS("100", 5); // ❌ ERRO: Argumento do tipo 'string' não é atribuível a 'number'

interface Projetox {
  titulo: string;
  tecnologias: string[];
  link: string;
  ano: number;
}

const meuProjeto: Projetox = {
  titulo: "Teste",
  tecnologias: ["Typescript", "Javascript"],
  link: "link",
  ano: 2025
}