import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;

    display: flex;
    justify-content: center;

    ul{
        width: 30rem;
        border-radius: 0.25 rem;
        margin: 5px;
        border: 2px solid #d7d7d7;
        background-color: #ebcef0;

        h3{
            text-align: center;
            color: #172b4d;
        }

        li{
            padding: 1rem;
            color: var(--text-body);
            background: var(--white);
            border: 0;
            border-radius: 10px;
            list-style: none;
            display: flex;
            justify-content: space-between;
            
        }
;
    }
    

`;