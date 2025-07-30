type Tecnologia = "TypeScript" | "Angular" | "fastAPI";

interface Projeto{
    id: number;
    titulo: string;
    descricao: string;
    tecnologias: Tecnologia[];
    linkDemo?: string
}