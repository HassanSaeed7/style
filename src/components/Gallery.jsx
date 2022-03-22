import React, { useEffect, useState, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../hooks/useOnScreen";
import cn from "classnames";
import c1 from "../assets/1.jpg"
import c2 from "../assets/2.jpg"
import c3 from "../assets/4.jpg"
import c4 from "../assets/9.jpg"

const images = [
  {
    src: `${c1}`,
    title: "Color",
    subtitle: "Vivid and Vivacious",
    category: <a href='/'>Shop</a>,
  },
  {
    src: `${c2}`,
    title: "Shape",
    subtitle: "Space and Dimension",
    category: <a href='/'>Shop</a>,
  },
  {
    src: `${c3}`,
    title: "Form",
    subtitle: "Material and Contour",
    category: <a href='/'>Shop</a>,
  },
  {
    src: `${c4}`,
    title: "Essence",
    subtitle: "Spirit and Emotion",
    category: <a href='/'>Shop</a>,
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          {/* <p className="gallery-info-category">{category}</p> */}
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}


const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1)
  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };
  return (
    <section className="section-wrapper gallery-wrap" data-scroll-section>


        <div className="gallery" ref={ref}>

        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>

        </div>


        {images.map((image, index) => (
          <GalleryItem 
          key={image.src} 
          index={index}
          {...image}
          updateActiveImage={index=> setActiveImage(index + 1)}
          />
        ))}

        </div>
    </section>
  )
}

export default Gallery