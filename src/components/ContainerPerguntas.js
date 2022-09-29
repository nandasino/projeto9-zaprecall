export default function ContainerPerguntas(props) {
    const {perguntas}= props;
    return (
        <>
        {perguntas.map((p)=> <li>{p.name}</li>)}
        </>
    );
}