import React, { useEffect, useState } from "react";

function ResizeContent() {
  const [isLarge, setIsLarge] = useState(false);
  const [originalStyles, setOriginalStyles] = useState({
    bodyFontSize: "",
    headersFontSize: {},
    paragraphsFontSize: {},
    imagesSize: [],
  });

  const changeSizeTo = 1.25;

  useEffect(() => {
    const handleResizeEvent = (event) => {
      if (event.key.toLowerCase() === "r") resizeContent();
    };

    document.body.addEventListener("dblclick", resizeContent);
    document.addEventListener("keydown", handleResizeEvent);

    return () => {
      document.body.removeEventListener("dblclick", resizeContent);
      document.removeEventListener("keydown", handleResizeEvent);
    };
  }, [isLarge, originalStyles]);

  const resizeContent = () => {
    const body = document.body;

    if (!isLarge) {
      const bodyFontSize = window.getComputedStyle(body).fontSize;
      const headers = body.querySelectorAll("h1, h2, h3, h4, h5, h6");
      const paragraphs = body.querySelectorAll("p");
      const images = body.querySelectorAll("img");

      const headersFontSize = {};
      headers.forEach((header) => {
        headersFontSize[header.tagName] = window.getComputedStyle(header).fontSize;
      });

      const paragraphsFontSize = {};
      paragraphs.forEach((p, index) => {
        paragraphsFontSize[index] = window.getComputedStyle(p).fontSize;
      });

      const imagesSize = Array.from(images).map(
        (img) => img.style.width || window.getComputedStyle(img).width
      );

      setOriginalStyles({
        bodyFontSize,
        headersFontSize,
        paragraphsFontSize,
        imagesSize,
      });

      body.style.fontSize = `${parseFloat(bodyFontSize) * changeSizeTo}px`;
      headers.forEach((header) => {
        header.style.fontSize = `${parseFloat(headersFontSize[header.tagName]) * changeSizeTo}px`;
      });
      paragraphs.forEach((p, index) => {
        p.style.fontSize = `${parseFloat(paragraphsFontSize[index]) * changeSizeTo}px`;
      });
      images.forEach((img, index) => {
        img.style.width = `${parseFloat(imagesSize[index]) * changeSizeTo}px`;
      });
    } else {
      const { bodyFontSize, headersFontSize, paragraphsFontSize, imagesSize } = originalStyles;

      body.style.fontSize = bodyFontSize;
      const headers = body.querySelectorAll("h1, h2, h3, h4, h5, h6");
      const paragraphs = body.querySelectorAll("p");
      const images = body.querySelectorAll("img");

      headers.forEach((header) => {
        header.style.fontSize = headersFontSize[header.tagName];
      });
      paragraphs.forEach((p, index) => {
        p.style.fontSize = paragraphsFontSize[index];
      });
      images.forEach((img, index) => {
        img.style.width = imagesSize[index];
      });
    }

    setIsLarge(!isLarge);
  };

  return (
    <div>
      <button onClick={resizeContent} className="transition-all duration-300 ease-in-out styled-button bg-gradient-to-r from-purple-700 to-blue-500 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
      >
        Zmeniť veľkosť
      </button>
    </div>
  );
}

export default ResizeContent;
