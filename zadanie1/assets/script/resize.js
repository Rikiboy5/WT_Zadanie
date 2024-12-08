let original_body_sz = "";   
let original_header_sz = {}; 
let original_paragraph_sz = {}; 
let original_img_sz = [];    
let is_large = false;
/// vvv zmeniť veľkosť vvv 
let chainge_size_to = 1.25;

function resizeContent() {
    const body = document.body; 

   // či je potrebné zmeniť veľkosť.
    if (!is_large) {
        //console.log("Zmena velkosti");

        original_body_sz = window.getComputedStyle(body).fontSize;
        const headers = body.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(header => {
            original_header_sz[header.tagName] = window.getComputedStyle(header).fontSize;
        });

        const paragraphs = body.querySelectorAll('p'); 
        paragraphs.forEach((p, index) => {
            original_paragraph_sz[index] = window.getComputedStyle(p).fontSize;
        });

        const imgs = body.querySelectorAll("img");
        original_img_sz = Array.from(imgs).map(img => img.style.width || window.getComputedStyle(img).width);

        body.style.fontSize = `${parseFloat(original_body_sz) * chainge_size_to}px`;

        headers.forEach(header => {
            header.style.fontSize = `${parseFloat(original_header_sz[header.tagName]) * chainge_size_to}px`;
        });

        paragraphs.forEach((p, index) => {
            p.style.fontSize = `${parseFloat(original_paragraph_sz[index]) * chainge_size_to}px`;
        });

        imgs.forEach((img, index) => {
            img.style.width = `${parseFloat(original_img_sz[index]) * chainge_size_to}px`;
        });

    } else {
        body.style.fontSize = original_body_sz;

        const headers = body.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(header => {
            header.style.fontSize = original_header_sz[header.tagName]; 
        });

        const paragraphs = body.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            p.style.fontSize = original_paragraph_sz[index];
        });

        const imgs = body.querySelectorAll("img");
        imgs.forEach((img, index) => {
            img.style.width = original_img_sz[index]; 
        });
    }

    is_large = !is_large; 
}

document.body.addEventListener("dblclick", resizeContent); 

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "r") {
        resizeContent(); 
    }
}); 
