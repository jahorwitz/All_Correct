import Link from "next/link";
import { Button, CheckboxWrapper, Info, ModalWrapper, Text, Title } from "./ModalInfo.styles";
import ErrorBoundary from "../ErrorBoundary";

export const ModalInfo = ({ handleSubmit }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ModalWrapper role="Form Inquiry" aria-labelledby="Form Inquiry">
      <form onSubmit={handleSubmit}>
        <Title>Get in Touch</Title>
        <ErrorBoundary>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            minLength="2"
            maxLength="40"
            required
          />
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Project Description"
            minLength="2"
            maxLength="200"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email*"
            required
          />
          <label className="custom-file-upload">
            <input type="file" />
            Add files if needed
          </label>
          <CheckboxWrapper>
            <input
              type="checkbox"
              name="GDPR Agreement"
              value="GDPR Agreement"
              onChange={() => setChecked(!checked)}
            />
            {checked ? <Text>GDPR Agreement</Text> : <Text>GDPR Agreement</Text>}
          </CheckboxWrapper>
          <Info>
            Please note that this form is strictly for project inquiries only. To apply for a job,
            please visit our{" "}
            <Link
              href="https://allcorrectgames.com/for-freelancers/"
              target="_blank"
              noopener="true">
              <a>career page.</a>
            </Link>
          </Info>
          <Button onClick={handleSubmit}>Send the form –></Button>
        </ErrorBoundary>
      </form>
    </ModalWrapper>
  );
};
