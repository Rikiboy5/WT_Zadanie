const resizeElement = document.getElementById('resize-element');
const dynamicCssLink = document.getElementById('dynamic-css');

// Funkce pro aktualizaci CSS souboru podle šířky elementu
function updateCssByWidth() {
  const width = resizeElement.offsetWidth;
  let newCssFile = 'assets/css/style-700.css';

  console.log("Aktuální šířka elementu:", width); // Ladění

  if (width >= 1600) {
    newCssFile = 'assets/css/style-1600.css';
  } else if (width >= 1300) {
    newCssFile = 'assets/css/style-1300.css';
  } else if (width >= 900) {
    newCssFile = 'assets/css/style-900.css';
  }

  if (dynamicCssLink.getAttribute('href') !== newCssFile) {
    console.log("Načítám CSS soubor:", newCssFile); // Ladění
    dynamicCssLink.setAttribute('href', newCssFile);
  }
}

// Nastavení šířky podle tlačítek
function setWidth(width) {
  resizeElement.style.width = width + 'px';
  updateCssByWidth();
}

// Nastavení změny šířky pomocí šipek
function handleArrowKeys(event) {
  let currentWidth = resizeElement.offsetWidth;

  // Zvýšíme nebo snížíme šířku o 10 px na základě stisknuté klávesy
  if (event.key === "ArrowRight") {
    currentWidth += 10;
  } else if (event.key === "ArrowLeft") {
    currentWidth -= 10;
  } else {
    return; // Pokud není šipka vlevo nebo vpravo, ukončíme funkci
  }

  // Omezíme minimální a maximální šířku
  if (currentWidth < 700) currentWidth = 700;
  if (currentWidth > 1600) currentWidth = 1600;

  resizeElement.style.width = currentWidth + 'px';
  updateCssByWidth();
}

// Přidáme listener pro stisk kláves
window.addEventListener('keydown', handleArrowKeys);

// Pozorování změn velikosti elementu
const resizeObserver = new ResizeObserver(updateCssByWidth);
resizeObserver.observe(resizeElement);

// Načítání CSS při startu
updateCssByWidth();