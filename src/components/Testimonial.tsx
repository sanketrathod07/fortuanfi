import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { WrapperContainer, imgbaseUrl } from "./SliderItem";
import { Paragraph, ParagraphWithLightBorder, TitleH4 } from "./About";
import { TitleWithBigMargin } from "./Services";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
library.add(faQuoteRight);
const Container = styled(WrapperContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
`;
const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledSlider = styled(Slider)`
  margin: 0 -12px;
  width: 100%;
  .slick-dots {
    position: initial;
  }
  //Active Dots Style
  .slick-dots li.slick-active button {
    border-color: ${({ theme }) => theme.palette.primary.main};
    ::before {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  .slick-dots li {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 5px;
  }
  .slick-dots li button {
    border: 1px solid ${({ theme }) => theme.palette.primary.light};
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;
const SlideItemContainer = styled.div`
  padding-right: 24px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  padding: 48px 24px 24px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 48px;
  ::after,
  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    left: 50%;
    transform: translateX(-50%);
  }
  :after {
    top: 100%;
    border-color: ${({ theme }) => theme.palette.common.white} transparent
      transparent transparent;
    border-width: 30px;
  }
  :before {
    top: 100.11%;
    border-color: ${({ theme }) => theme.palette.primary.light} transparent
      transparent transparent;
    border-width: 32px;
  }
`;
const IconContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => theme.palette.common.white};
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 2rem;
`;
const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  border-radius: 50%;
`;
const Testimonial = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "175px",
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  interface SlideItemType {
    description: string;
    img: string;
    name: string;
    profession: string;
  }
  const slideItemArray: SlideItemType[] = [
    {
      description:
        "Working with FortunaFi has been a game-changer for our business. Their financial planning and consulting services helped us streamline our operations and significantly increase our profitability. I highly recommend their expertise to any business looking to grow efficiently.",
      img: "1",
      name: "John Williams",
      profession: "CEO, BrightFuture Tech",
    },
    {
      description:
        "We’ve been investing with FortunaFi for over two years, and their cash investment strategies have consistently delivered strong returns. The personalized service and deep industry knowledge they provide have given us peace of mind, knowing our finances are in safe hands.",
      img: "2",
      name: "Rachel Adams",
      profession: "Financial Manager, GreenWave Investments",
    },
    {
      description:
        "FortunaFi's business loan options helped us secure the capital we needed to expand our operations. Their flexibility and understanding of our financial situation made the entire process smooth and stress-free. We’ve been able to grow faster than we ever anticipated.",
      img: "3",
      name: "Michael Lee",
      profession: "Founder, Lee & Co. Consulting",
    },
    {
      description:
        "As a startup, navigating the financial side of business growth can be challenging. FortunaFi’s financial consultancy services were exactly what we needed to get on the right track. Thanks to their advice, we’ve been able to grow our business while maintaining financial stability.",
      img: "4",
      name: "Sarah Thompson",
      profession: "Co-founder, Horizon Health Solutions",
    },
  ];
  // Top and bottom scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  const topEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top center",
      },
    });
    tl.from(topEl.current, {
      opacity: 0,
      y: "100%",
    }).from(".testimonial-slick-list", {
      opacity: 0,
      y: "100%",
    });
    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <ContainerTop ref={topEl}>
        <ParagraphWithLightBorder>Testimonial</ParagraphWithLightBorder>
        <TitleWithBigMargin>What Our Clients Say!</TitleWithBigMargin>
      </ContainerTop>
      <StyledSlider className="testimonial-slick-list" {...settings}>
        {slideItemArray.map(({ description, img, name, profession }, idx) => (
          <SlideItemContainer key={idx}>
            <SlideItem>
              <Top>
                <IconContainer>
                  <Icon icon={["fas", "quote-right"]} />
                </IconContainer>
                <StyledParagraph>{description}</StyledParagraph>
              </Top>
              <Image src={`${imgbaseUrl}testimonial-${img}.jpg`} />
              <TitleH4>{name}</TitleH4>
              <Paragraph>{profession}</Paragraph>
            </SlideItem>
          </SlideItemContainer>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default Testimonial;
