import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./DataSearch"
import ShowBooks from "../ShowBooks"

const SearchContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`


type Livro = {
  id: number
  nome: string
  src: string
}

export default function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Livro[]>([])

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>

      <Input
        type="text"
        placeholder="Escreva sua próxima leitura..."
        value={query}
        onChange={(e) => {
          const value = e.target.value
          setQuery(value)

          if (!value.trim()) {
            setResults([])
            return
          }

          const filtered = livros.filter((livro) =>
            livro.nome.toLowerCase().includes(value.toLowerCase())
          )
          setResults(filtered)
        }}
      />
      <ShowBooks searchTerm={results} />
    </SearchContainer>
  )
}