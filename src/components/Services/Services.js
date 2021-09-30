import { Container, Title } from "./Services.styles";

import Collapsibles from "../Collapsible/Collapsible.js";
import CollapsibleItem from "../CollapsibleItem/CollapsibleItem.js";

function Services() {
  const fakedata = [
    { title: "Learn game localization" },
    { title: "Localization and functional game testing" },
    { title: "Voiceovers" },
    { title: "Game art" },
  ];

  return (
    <Container>
      <Title>Our Services</Title>

      <Collapsibles>
        {fakedata.map((item, i) => (
          <CollapsibleItem title={item.title} key={i}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </CollapsibleItem>
        ))}
      </Collapsibles>
    </Container>
  );
}

export default Services;
