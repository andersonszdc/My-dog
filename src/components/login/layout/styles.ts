import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  .wrapper__image {
    position: relative;
  }

  .image {
    object-fit: cover;
  }
`;