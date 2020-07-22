import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  padding: 1rem 1rem;
  border-radius: 5px 5px 0 0;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);

  h5 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    font-weight: 600;
    color: #565656;
    margin-top: 0.8rem;
  }

  border-top: 6px solid
    ${(props) => {
      if (props.success) return "#3CFF72";
      else if (props.danger) return "#FF6464";
      else return "var(--primary-color)";
    }};
`;
