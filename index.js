const work1Modal = document.getElementById("work1GalleryModal");
    const work2Modal = document.getElementById("work2GalleryModal");
    const work1Btn = document.getElementById("viewWork1GalleryBtn");
    const work2Btn = document.getElementById("viewWork2GalleryBtn");
    const closeButtons = document.getElementsByClassName("close");

    // When the user clicks the "View Work 1 Gallery" button, open Work 1 modal
    work1Btn.onclick = function() {
      work1Modal.style.display = "block";
    }

    // When the user clicks the "View Work 2 Gallery" button, open Work 2 modal
    work2Btn.onclick = function() {
      work2Modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close both modals
    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].onclick = function() {
        work1Modal.style.display = "none";
        work2Modal.style.display = "none";
      }
    }

    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
      if (event.target == work1Modal) {
        work1Modal.style.display = "none";
      }
      if (event.target == work2Modal) {
        work2Modal.style.display = "none";
      }
    }