import { Container, Text, ReviewsContainer, Review, Body, Logo, Img } from "./Reviews.styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Reviews() {
  const carousel = useRef();
  const [startX, setX] = useState(false);
  const [carouselScrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const [scrollDirection, setDirection] = useState("forward");
  let timeout;
  let interval;

  useEffect(() => {
    if (scrollDirection) {
      interval = setInterval(() => {
        carousel.current.style.scrollSnapType = "both mandatory";
        carousel.current.style.scrollBehavior = "smooth";
        if (scrollDirection === "backward") {
          if (carousel.current.scrollLeft - carousel.current.offsetWidth <= 0) {
            clearInterval(interval);
            setDirection("forward");
          }
          carousel.current.scrollBy({
            left: -carousel.current.offsetWidth / 2,
            behavior: "smooth",
          });
        }
        if (scrollDirection === "forward") {
          if (
            carousel.current.scrollLeft + carousel.current.offsetWidth >=
            carousel.current.scrollWidth - carousel.current.offsetWidth
          ) {
            clearInterval(interval);
            setDirection("backward");
          }
          carousel.current.scrollBy({
            left: carousel.current.offsetWidth / 2,
            behavior: "smooth",
          });
        }
      }, 2000);
    }
  }, [scrollDirection]);

  function handleMouseDown(e) {
    const x = e.pageX - carousel.current.offsetLeft;
    setX(x >= 0 ? x : 0);
    setScrollLeft(carousel.current.scrollLeft);
    clearInterval(interval);
  }

  function handleMouseMove(e) {
    e.preventDefault();
    if (typeof startX === "number") {
      carousel.current.style.scrollBehavior = "";
      carousel.current.style.scrollSnapType = "";
      setDragging(true);
      carousel.current.scrollLeft =
        startX - (e.pageX - carousel.current.offsetLeft) + carouselScrollLeft;
    }
  }

  function stopDragging(e) {
    if (
      Math.abs(carouselScrollLeft - carousel.current.scrollLeft) < 1 &&
      e.target !== carousel.current
    ) {
      setDragging(false);
    }
    setX(false);
  }

  function handleClick(e) {
    if (e.target === carousel.current && !isDragging) {
      carousel.current.style.scrollSnapType = "both mandatory";
      carousel.current.style.scrollBehavior = "smooth";
      return;
    }
    if (
      Math.abs(carouselScrollLeft - carousel.current.scrollLeft) < 1 &&
      e.target !== carousel.current
    ) {
      const scrollValue =
        e.currentTarget.getBoundingClientRect().left -
        carousel.current.offsetLeft -
        (carousel.current.offsetWidth - e.currentTarget.getBoundingClientRect().width) / 2;

      carousel.current.scrollBy({
        left: Math.abs(scrollValue) > 1 ? scrollValue : 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        carousel.current.style.scrollSnapType = "both mandatory";
        carousel.current.style.scrollBehavior = "smooth";
      }, 200);
    }
  }

  function handlePress(e) {
    clearInterval(interval);
    if (e.type === "keydown" && carousel.current.style.scrollSnapType) {
      timeout = setTimeout(() => {
        setDragging(true);
        carousel.current.style.scrollSnapType = "";
        carousel.current.style.scrollBehavior = "";
      }, 300);
    }

    if (e.type === "keyup" && !isDragging) {
      clearTimeout(timeout);
      e.preventDefault();
      carousel.current.style.scrollSnapType = "both mandatory";
      carousel.current.style.scrollBehavior = "smooth";
    }
  }

  return (
    <Container>
      <Text className="title">Reviews</Text>
      <ReviewsContainer
        ref={carousel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onClick={handleClick}
        onKeyUpCapture={handlePress}
        onKeyDown={handlePress}
        onTouchStart={() => clearInterval(interval)}
        tabIndex={0}>
        {[...Array(6).keys()].map((e) => (
          <Review key={e} onClick={handleClick}>
            <Body>
              <Text className="medium">
                {`"Thank you and the entire team so, so much – just from the delivered files alone, I can see the amount of hard work, care and love that went into this project from your side.
It’s been a real pleasure working together so far, and I hope there are many more collaborations to come! It’s been a real pleasure working together so far, and I hope there are many more collaborations en a real pleasure working together so far, and I hope there are many more en a real`}
              </Text>
            </Body>
            <Logo>
              <Text className="sm">EA Games</Text>
              <Img>
                <Image
                  src="/images/review/review.png"
                  alt="review Image"
                  layout="fill"
                  priority="true"
                  quality={25}
                />
              </Img>
            </Logo>
          </Review>
        ))}
      </ReviewsContainer>
      <Text className="right">
        <Text as="span" className="blue">
          Get in touch
        </Text>{" "}
        to start your project &#10230;
      </Text>
    </Container>
  );
}

export default Reviews;
