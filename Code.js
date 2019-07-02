function onInstall(e){
  onOpen(e);
}

function onOpen(e){
  SlidesApp.getUi()
    .createMenu('Insert Images')
    .addItem('Insert Images', 'init')
    .addToUi();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getHTML(){
  return HtmlService
    .createTemplateFromFile('index.html')
    .evaluate()
    .setTitle('CC Search');
}

function init(){
  var htmlOut = getHTML();

  // Display the sidebar
  SlidesApp
    .getUi()
    .showSidebar(htmlOut);
}

function insertImage(url, attribution, numImages, attribLoc){
  var currentSlide = SlidesApp
    .getActivePresentation()
    .getSelection()
    .getCurrentPage()
    .asSlide();
  var numOfSlideGroups = currentSlide.getGroups().length + 1;
  if (numOfSlideGroups < numImages){
    numImages = numOfSlideGroups;
  }
  var offset = numImages * 10 + 10;
  var fontSize = 8;
  var currentImage = currentSlide.insertImage(url);
  var currentImageText;
  if (attribLoc.image){
    currentImageText = currentSlide.insertTextBox(attribution);
  }else{
    currentImageText = currentSlide.insertTextBox(numImages + "*");
  }
  currentImageText
    .getText()
    .getTextStyle()
    .setFontSize(fontSize)
    .setBackgroundColor(0,0,0)
    .setForegroundColor(255,152,0);
  var groupList = [currentImage, currentImageText];
  currentSlide.group(groupList);
  var slideWidth = SlidesApp.getActivePresentation().getPageWidth();
  var slideHeight = SlidesApp.getActivePresentation().getPageHeight();

  if (attribLoc.footer){
    currentSlide
      .insertTextBox("[" + numImages + "] " + attribution, 0, slideHeight - offset, 720, 20)
      .bringToFront()
      .getText()
      .getTextStyle()
      .setFontSize(fontSize)
      .setBackgroundColor(255,152,0);
  }

}
