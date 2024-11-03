const resizeElement = document.getElementById('resize-element');
const dynamicCssLink = document.getElementById('dynamic-css');


function updateCssByWidth() {
  const width = resizeElement.offsetWidth;
  let newCssFile = 'assets/css/style-700.css';

  if (width >= 1600) {
    newCssFile = 'assets/css/style-1600.css';
  } else if (width >= 1300) {
    newCssFile = 'assets/css/style-1300.css';
  } else if (width >= 900) {
    newCssFile = 'assets/css/style-900.css';
  }

  if (dynamicCssLink.getAttribute('href') !== newCssFile) {
    dynamicCssLink.setAttribute('href', newCssFile);
  }
}


function setWidth(width) {
  resizeElement.style.width = width + 'px';
  updateCssByWidth();
}


function handleArrowKeys(event) {
  let currentWidth = resizeElement.offsetWidth;


  if (event.key === "ArrowRight") {
    currentWidth += 10;
  } else if (event.key === "ArrowLeft") {
    currentWidth -= 10;
  } else {
    return; 
  }


  if (currentWidth < 700) currentWidth = 700;
  if (currentWidth > 1600) currentWidth = 1600;

  resizeElement.style.width = currentWidth + 'px';
  updateCssByWidth();
}


window.addEventListener('keydown', handleArrowKeys);


const resizeObserver = new ResizeObserver(updateCssByWidth);
resizeObserver.observe(resizeElement);


updateCssByWidth();