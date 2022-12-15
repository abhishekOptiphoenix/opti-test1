import { styled } from "frontity";

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:900px) {
    justify-content: flex-start;
    overflow-x: auto;
  }
`;

export const Tab = styled.button`
    border: none;
    outline: none;
    /* pointer-events: ${props => (props.active ? "inherit" : "none")} ; */
    width: 219px;
    height: 51px;
    position: relative;
    background: ${props => (props.active ? "linear-gradient(37.1deg, #8212C4 0.98%, #4654F6 96.75%)" : "transparent")};
    box-shadow: ${props => (props.active ? "0px 7px 24px rgba(25, 64, 187, 0.25)" : null)};
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    color:${props => (props.active ? "#ffffff" : "#969595")};
    transition: background-color 1s ease-in-out;
    letter-spacing: 0.2em;
    max-width: 100%;
    flex-shrink: 0;
    &:focus{
        outline: none;
    }
    @media (max-width:480px) {
      width: 163px;
      height: 39px;
      font-size: 12px;
    }
`;
export const Content = styled.div`
margin-top: 85px;
@media (max-width:927px) {
  margin-top: 50px;
}
@media (max-width:480px) {
  margin-top: 32px;
}
  ${props => (props.active ? "" : "display:none")}
`;
