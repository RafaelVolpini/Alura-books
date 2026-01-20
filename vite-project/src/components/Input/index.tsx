import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
        border: 1px solid #FFF;
        background: transparent;
        border: 1px solid #FFF;
        padding: 20px 140px;
        border-radius: 50px;
        width: 200px;
        color: #FFF;
        font-size: 16px;
        margin-bottom: 10px;

        &::placeholder {
                color: #FFF;
                font-size: 16px;
        }
`

type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props) {
  return <StyledInput {...props} />
}