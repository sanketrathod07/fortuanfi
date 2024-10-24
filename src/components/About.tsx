import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleXmark,
  faPhoneFlip,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { lgDown, mdDown, smDown, xlDown, xsDown } from "../utils/responsive";
import {
  ParagraphWithBorder,
  WrapperContainer,
  imgbaseUrl,
} from "./SliderItem";
library.add(faCircleXmark, faUsers, faPhoneFlip);
const Container = styled(WrapperContainer)`
  padding: 48px 12px;
  ${mdDown({
  padding: "0px 15px",
})};
`;
const ColWrapper = styled.div`
  display: flex;
  margin: 0 -17px 54px;
  align-items: center;
  ${mdDown({
  flexDirection: "column",
})};
`;
const Col = styled.div`
  padding: 0 12px;
  height: 624px;
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${xlDown({
  height: 546,
})};
  ${lgDown({
  height: 586,
})};
  ${mdDown({
  width: "100%",
})};
`;
const Left = styled(Col)`
  opacity: 0;
  transform: translateY(100%);
  ${mdDown({
  height: 696,
})};
  ${smDown({
  height: 516,
})};
  ${xsDown({
  height: "auto",
})};
`;
const Right = styled(Col)`
  height: auto;
  opacity: 0;
  transform: translateY(100%);
  padding-top: 6rem;
  ${xlDown({
  paddingTop: "4rem",
})};
  ${mdDown({
  paddingTop: "2rem",
})};
`;
export const ParagraphWithLightBorder = styled(ParagraphWithBorder)`
  border-color: ${({ theme }) => theme.palette.primary.light};
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 3rem;
  margin-bottom: 24px;
  ${lgDown({
  fontSize: "calc(1.425rem + 2.1vw)",
})}
`;
export const Desc = styled.p`
  color: ${({ theme }) => theme.palette.common.black};
  margin-bottom: 24px;
  font-weight: 400;
`;
const TabContainer = styled.div`
  width: 100%;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 14rem;
  ${mdDown({
  height: "17rem",

})}
`;
const TabHeader = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
`;
interface TabTitleProps {
  isSelected: boolean;
}
const TabTitle = styled.button<TabTitleProps>`
  color: ${({ isSelected, theme }) =>
    isSelected ? "#495057" : theme.palette.primary.main};
  padding: 8px 16px;
  background-color: transparent;
  border-color: ${({ theme }) => theme.palette.common.black};
  border-width: 0;
  transition: all 150ms ease-in-out;
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} 0 0`};
  margin-bottom: -1px;
  border-color: ${({ isSelected }) =>
    isSelected ? "#dee2e6 #dee2e6 #fff" : "transparent"};
  cursor: pointer;
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  font-weight: 500;
  line-height: inherit;
  &:hover {
    border-color: ${({ isSelected }) =>
    isSelected ? "#dee2e6 #dee2e6 #fff" : "#dee2e6 #dee2e6 transparent"};
  }
`;
interface TabDescContainerProps {
  isSelected: boolean;
}
export const fadeout = keyframes`
  0% {
    display:none;
    opacity:0;
  }
  70% {
    display:none;
    opacity:0;
  }
  100% {
    display:block;
    opacity:1;
  }
`;
const TabDescContainer = styled.div<TabDescContainerProps>`
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  animation: ${fadeout} 300ms linear;
`;
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.common.black};
`;
const StyledParagraph = styled(Paragraph)`
  &:first-of-type {
    margin-bottom: 16px;
  }
`;
const AboutFooter = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 24px;
  display: flex;
  ${mdDown({
  flexDirection: "column",
})}
`;
const AboutFooterItem = styled.div`
  margin-top: 24px;
  padding: 0 12px;
  display: flex;
  border: 1px solid transparent;
  &:not(:last-of-type) {
    border-right-color: ${({ theme }) => theme.palette.primary.light};
    ${({ theme }) =>
    mdDown({
      borderRightColor: "transparent",
      borderBottomColor: theme.palette.primary.light,
    })}
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 3rem;
`;
const AboutFooterDescContainer = styled.div`
  padding-left: 10px;
  ${smDown({
  paddingLeft: 16,
})}
`;
export const TitleH4 = styled.h4`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.5rem;
  margin-bottom: 8px;
  ${lgDown({
  fontSize: "calc(1.275rem + .3vw)",
})}
`;
const AboutFooterItemParagraph = styled.p`
  color: ${({ theme }) => theme.palette.common.black};
  ${mdDown({
  marginBottom: 24,
})}
`;
const About = () => {
  const handleSelect = (idx: number) => {
    setTabIndex(idx);
  };

  const [tabIndex, setTabIndex] = useState(0);
  const tabTitles: string[] = ["Story", "Mission", " Vision"];
  interface ITabDesc {
    firstDesc: string;
    secondDesc: string;
  }
  const tabDescs: ITabDesc[] = [
    {
      firstDesc:
        "We started with a simple idea: to help businesses grow. From our humble beginnings, we have become a trusted partner for many.",
      secondDesc:
        "Our story is about passion and dedication, as we continue to support our clients in achieving their goals.",
    },
    {
      firstDesc:
        "Our mission is to provide smart solutions that help businesses grow and succeed. We focus on understanding our clients' needs.",
      secondDesc:
        "By building strong relationships, we aim to drive positive change and deliver real results for every business we serve.",
    },
    {
      firstDesc:
        "Our vision is to ensure every business has the resources to thrive. We believe in a future where collaboration leads to success.",
      secondDesc:
        "We aim to inspire businesses to reach their full potential and create a supportive community for everyone.",
    },
  ];


  interface IFooterItem {
    iconName: IconName;
    title: string;
    desc: string;
  }
  const footerItems: IFooterItem[] = [
    {
      iconName: "circle-xmark",
      title: "No Hidden Cost",
      desc: " Clita erat ipsum lorem sit sed stet duo justo",
    },
    {
      iconName: "users",
      title: "Dedicated Team",
      desc: " Clita erat ipsum lorem sit sed stet duo justo",
    },
    {
      iconName: "phone-flip",
      title: "24/7 Available",
      desc: " Clita erat ipsum lorem sit sed stet duo justo",
    },
  ];
  // Left on scroll animation
  const leftEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tween = gsap.to(leftEl.current, {
      opacity: 1,
      y: 0,
      delay: 0.1,
      duration: 0.1,
      scrollTrigger: {
        trigger: leftEl.current,
        start: "top-=170% center",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);
  // Right on scroll animation
  const rightEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tween = gsap.to(rightEl.current, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 0.3,
      scrollTrigger: {
        trigger: rightEl.current,
        start: "top-=150% center",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);
  // aboutFooter container and child animation on scroll
  const aboutFooterEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutFooterEl.current,
        start: "top-=400% center",
      },
    });
    t1.from(aboutFooterEl.current, {
      opacity: 0,
      y: "100%",
      delay: 0.1,
      duration: 0.2,
    });
    t1.from(revealRefs.current, {
      opacity: 0,
      y: "100%",
      duration: 0.5,
      stagger: 0.1,
    });
    return () => t1.scrollTrigger?.kill();
  }, []);
  // AboutFooterItem animation on scroll
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };
  return (
    <Container>
      <ColWrapper>
        <Left ref={leftEl}>
          <ParagraphWithBorder>About Us</ParagraphWithBorder>
          <Image src={`${imgbaseUrl}about2.jpg`} />
        </Left>
        <Right ref={rightEl}>
          <Title>We Help Businesses Grow and Succeed Their Business</Title>
          <Desc>
            We specialize in driving measurable results by providing tailored solutions that align with your business goals. Whether it's enhancing operational efficiency or identifying new opportunities, our expertise helps you scale with confidence. Our approach is focused on delivering long-term value and fostering partnerships that enable businesses to thrive in an ever-evolving market.

            This version focuses on sustainable growth, value-driven results, and building confidence, which feels more impactful and client-centric.
          </Desc>
          <TabContainer>
            <TabHeader>
              {tabTitles.map((title, idx) => (
                <TabTitle
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  isSelected={tabIndex === idx}
                >
                  {title}
                </TabTitle>
              ))}
            </TabHeader>
            {tabDescs.map(({ firstDesc, secondDesc }, idx) => (
              <TabDescContainer key={idx} isSelected={tabIndex === idx}>
                <StyledParagraph>{firstDesc}</StyledParagraph>
                <StyledParagraph>{secondDesc}</StyledParagraph>
              </TabDescContainer>
            ))}
          </TabContainer>
        </Right>
      </ColWrapper>
      <AboutFooter ref={aboutFooterEl}>
        {footerItems.map(({ iconName, title, desc }, idx) => (
          <AboutFooterItem ref={addToRefs} key={idx}>
            <Icon icon={["fas", iconName]} />
            <AboutFooterDescContainer>
              <TitleH4>{title}</TitleH4>
              <AboutFooterItemParagraph>{desc}</AboutFooterItemParagraph>
            </AboutFooterDescContainer>
          </AboutFooterItem>
        ))}
      </AboutFooter>
    </Container>
  );
};

export default About;
