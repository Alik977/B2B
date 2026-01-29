let originalTexts = new Map();

function translatePage(dict) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue.trim();
    if (!text) continue;

    if (!originalTexts.has(node)) {
      originalTexts.set(node, node.nodeValue);
    }

    if (dict[text]) {
      node.nodeValue = dict[text];
    }
  }
}

function restorePage() {
  originalTexts.forEach((value, node) => {
    node.nodeValue = value;
  });
}

const dictionary = {
  "ԳԼԽԱՎՈՐ": "HOME",
  "ՄԵՐ ՄԱՍԻՆ": "ABOUT US",
  "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ": "SERVICES",
  "ՊՈՐՏՖՈԼԻՈ": "PORTFOLIO",
  "ԲԼՈԳ": "BLOG",
  "ԿԱՊ": "CONTACT",
  "Ավելին": "Read More",
  "Տեսնել Ավելին": "See More",
  "ՄԵՐ ՀԱՃԱԽՈՐԴՆԵՐԸ": "OUR CLIENTS",
  "ԿԱՊ մեզ հետ": "CONTACT US",
  "Աշխատանքային ժամեր": "Working Hours",
  "Մենյու": "Menu",
  "Բոլոր իրավունքները պաշտպանված են։": "All rights reserved."
};

const toggle = document.getElementById("langToggle");

let currentLang = "hy";

toggle.addEventListener("click", () => {
  if (currentLang === "hy") {
    translatePage(dictionary);
    toggle.textContent = "EN";
    currentLang = "en";
  } else {
    restorePage();
    toggle.textContent = "Հայ";
    currentLang = "hy";
  }
});
