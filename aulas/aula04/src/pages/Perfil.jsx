import { useParams } from 'react-router'

// post/1/comment/10

function Perfil() {
    const { id } = useParams();

    return <h1>Perfil do Usuário {id}</h1>
}

export default Perfil;