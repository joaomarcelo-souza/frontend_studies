

type Props = {
    projeto: Projeto;
};

export default function ProjectCard({projeto}: Props){
    return(
        <div className="card">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <ul>
                {projeto.tecnologias.map(tech => (
                <li key={tech}>{tech}</li>
                ))}
            </ul>
        </div>
    );
}