import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paragraph, ParagraphWithLightBorder, Title } from "./About";
import { Button, Input, InputContainer, TextArea } from "./CallBack";
import { WrapperContainer } from "./SliderItem";
import { smDown } from "../utils/responsive";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Container = styled(WrapperContainer)`
  padding: 48px 12px;
`;
const Wrapper = styled.div`
  margin: 0 -12px;
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  padding: 0 12px;
  width: 50%;
  ${smDown({
  width: "100%",
})}
`;
const StyledParagraph = styled(Paragraph)``;
const DLLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const StyledInputContainer = styled(InputContainer)`
  width: 100%;
`;
const FormButton = styled(Button)`
  margin: 16px 8px;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 450px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const Contact = () => {
  // Container scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const contactTween = gsap.from(containerEl.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerEl.current,
      },
    });

    return () => {
      if (contactTween) contactTween.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Col>
          <ParagraphWithLightBorder>Contact</ParagraphWithLightBorder>
          <Title>If You Have Any Query, Please Contact Us</Title>
          <StyledParagraph>
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
            <DLLink to="/contact">Download Now</DLLink>.
          </StyledParagraph>
          <Form>
            <InputContainer>
              <Input placeholder="Your Name" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Your Email" />
            </InputContainer>
            <StyledInputContainer>
              <Input placeholder="Subject" />
            </StyledInputContainer>
            <TextArea placeholder="Message" />
            <FormButton type="submit">Send Message</FormButton>
          </Form>
        </Col>
        <Col>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241344.99144012027!2d72.60335882500002!3d19.06305650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92c52ba277b%3A0x6d3883f7179587e3!2sJio%20World%20Centre!5e0!3m2!1sen!2sin!4v1729451699742!5m2!1sen!2sin"
            aria-hidden="false"
            tabIndex={0}
          />
        </Col>
      </Wrapper>
    </Container>
  );
};

export default Contact;
