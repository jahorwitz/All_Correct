import { Container, Item, HeaderContainer, Title, DropdownButton, Content } from "./Collapsible.styles";

function Collapsible({ children }) {

  const handleClick = (event) => {
    event.preventDefault();
    console.log('handling click');
  }

  return (
    <Container>
      {children}
    </Container>
  );
}

export default Collapsible;
