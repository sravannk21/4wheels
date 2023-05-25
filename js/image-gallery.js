var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
      images[i].onmouseover = function () {
        this.style.cursor = "hand";
        this.style.borderColor = "red";
      };
      images[i].onmouseout = function () {
        this.style.cursor = "pointer";
        this.style.borderColor = "grey";
      };
    }

    function changeImageOnClick(event) {
      // debugger;
      var targetElement = event.srcElement;
      // debugger;
      if (targetElement.tagName === "IMG") {
        mainImage.src = targetElement.getAttribute("src");
      }
    }

//function for second image
function changeImageOnClick2(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage2.src = targetElement.getAttribute("src");
  }
}

//function for third image
function changeImageOnClick3(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage3.src = targetElement.getAttribute("src");
  }
}

//function for four image
function changeImageOnClick4(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage4.src = targetElement.getAttribute("src");
  }
}

//function for five image
function changeImageOnClick5(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage5.src = targetElement.getAttribute("src");
  }
}

//function for six image
function changeImageOnClick6(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage6.src = targetElement.getAttribute("src");
  }
}

//function for seven image
function changeImageOnClick7(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage7.src = targetElement.getAttribute("src");
  }
}

//function for eight image
function changeImageOnClick8(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage8.src = targetElement.getAttribute("src");
  }
}

//function for nine image
function changeImageOnClick9(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage9.src = targetElement.getAttribute("src");
  }
}

//function for ten image
function changeImageOnClick10(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage10.src = targetElement.getAttribute("src");
  }
}

//function for eleven image
function changeImageOnClick11(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage11.src = targetElement.getAttribute("src");
  }
}

//function for twelve image
function changeImageOnClick12(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage12.src = targetElement.getAttribute("src");
  }
}


//function for 13 image
function changeImageOnClick13(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage13.src = targetElement.getAttribute("src");
  }
}


//function for 14 image
function changeImageOnClick14(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage14.src = targetElement.getAttribute("src");
  }
}


//function for twelve image
function changeImageOnClick15(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage15.src = targetElement.getAttribute("src");
  }
}
