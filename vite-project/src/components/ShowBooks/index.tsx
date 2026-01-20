import { livros } from "../Search/DataSearch"
import styled from "styled-components";


const BooksContainer = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }


     background-image: linear-gradient(90deg, #002F52 35%, #326589 65%);

    `


export default function ShowBooks(Props: {searchTerm: typeof livros}) {
    return (
        <>
        {Props.searchTerm.map((livro) => (
                <BooksContainer key={livro.id}>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt={livro.nome} />
                </BooksContainer>
            ))}
        </>
    );
}