import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <ErroDiv 
    id="error-page" 
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.name || error.message}</i>
      </p>
    </ErroDiv>
  );
}

const ErroDiv = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
