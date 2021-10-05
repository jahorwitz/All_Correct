import { useState } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./Checkbox.styles";
import checkmark from "../../../public/images/logos/checkmark.svg";
import Image from "next/image";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={checked}>
        <Image src={checkmark} height={11.5} width={13.5} />
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

export default Checkbox;
