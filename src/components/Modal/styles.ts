import styled from 'styled-components';

export const FormContainer = styled.form`

    h2 {
        color: var(--blue);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    p {
        color: grey;
        margin-bottom: 5px;
    }

    input {
        width: 96%;
        padding: 10px;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        background: #e7e9ee;

        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    textarea {
        width: 96%;
        padding: 10px;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        background: #e7e9ee;

        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        margin-top: 1rem;
    }

    button[type='submit'], .delete {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green);
        color: var(--white);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
        

    }
    .delete{
        background: red;
        
    }

    .selecao {
        width: 100%;
        padding: 10px;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        background: #e7e9ee;

        font-size: 1rem;
        color: var(--blue);


        margin-bottom: 1rem;
    }
`;
