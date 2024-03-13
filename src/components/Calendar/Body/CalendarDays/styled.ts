import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// const DayCell = styled.button`
//   width: 2.4em;
//   height: 2.4em;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   cursor: default;
//   font: inherit;
//   border: none;
//   background-color: transparent;

//   &.current {
//     background-color: orange;
//     border-radius: 8px;
//   }

//   &.selectable {
//     cursor: pointer;

//     &:hover {
//       background: rgba(47, 128, 237, 0.1);
//       border-radius: 8px;
//       color: #2f80ed;
//     }
//   }

//   &[disabled] {
//     color: #aaaaaa;
//     cursor: default;

//     &:hover {
//       background: transparent;
//       color: #aaaaaa;
//     }
//   }

//   &.selected {
//     background: #2f80ed;
//     color: #ffffff;
//     border-radius: 8px;

//     &:hover {
//       background: #2f80ed;
//       color: #ffffff;
//     }
//   }
// `;

export { Wrapper };
