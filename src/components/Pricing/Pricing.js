import Link from "next/link";
import {
  FormWrapper,
  PricingTitle,
  TextWrapper,
  CheckWrapper,
  CheckItem,
  EmailWrapper,
  EmailInput,
  FormButton,
} from "./Pricing.styles";
import Checkbox from "../Checkbox/Checkbox";

function Pricing() {
  return (
    <FormWrapper action="#">
      <PricingTitle>Pricing</PricingTitle>
      <TextWrapper>
        <p>
          Our pricing depends on the type of services we provide. We have detailed PDFs with the
          pricing breakdown. Leave your eamil and we will send them back to you!{" "}
        </p>
        <CheckWrapper>
          <p>Please, select which services you are interested in:</p>
          <CheckItem>
            <Checkbox />
            <span>Lean game localization</span>
          </CheckItem>
          <CheckItem>
            <Checkbox />
            <span>Localization and functional game testing</span>
          </CheckItem>
          <CheckItem>
            <Checkbox />
            <span>Voiceovers</span>
          </CheckItem>
          <CheckItem>
            <Checkbox />
            <span>Game art</span>
          </CheckItem>
        </CheckWrapper>
      </TextWrapper>

      <CheckItem>
        <Checkbox />
        <span>
          I agree with the{" "}
          <Link href="#" target="_blank" rel="noopener">
            terms of use
          </Link>
        </span>
      </CheckItem>

      <EmailWrapper>
        <EmailInput placeholder="Your email" />
        <FormButton>Inquire price &#10230;</FormButton>
      </EmailWrapper>
    </FormWrapper>
  );
}

export default Pricing;
