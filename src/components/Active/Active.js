import { ActiveWrapper, BoxWrapper, BoxItem, TextWrapper } from "./Active.styles";

function Active() {
  return (
    <ActiveWrapper>
      <BoxWrapper>
        <BoxItem>
          <p>
            Active since <span>2008</span>
          </p>
        </BoxItem>
        <BoxItem>
          <p>
            <span>968 </span>games projects
          </p>
        </BoxItem>
        <BoxItem>
          <p>
            <span>9 </span>
            top video game <br />
            companies work with us
          </p>
        </BoxItem>
      </BoxWrapper>
      <TextWrapper>
        <p>99.44% of projects delivered by or before deadline</p>
        <p>(More than 1500 tasks delivered on time every month)</p>
      </TextWrapper>
    </ActiveWrapper>
  );
}

export default Active;
