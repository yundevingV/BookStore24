import { styled } from "styled-components";

export default function BookStore() {
  return (
    <>
      <CenteredContainer>
        BookStore24의 추천 도서
      </CenteredContainer>
    </>
  );
}

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: tway;
  font-size: 25px;
  padding : 25px;
`;
