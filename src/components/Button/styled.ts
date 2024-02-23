import { styled, css } from "styled-components";

const ButtonStyled = styled.button<{ $variant: "primary" | "secondary" }>`
  padding: 16px;
  text-align: center;

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return css`
          background-color: blue;
          color: white;
        `;

      case "secondary":
        return css`
          background-color: white;
          color: blue;
          border: 1px solid blue;
        `;
    }
  }}
`;

export { ButtonStyled };
