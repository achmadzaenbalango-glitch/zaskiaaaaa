const message = `sayang andai kamu sadar aku tuh ga debatin apapun, asal kamuu tau kamu makin lama makin berubah dan aga red flag gitu sayang.\nakuu sebenernya uda ga kuat sayangg sama kamuu tapi ntah kenapa rasa sayang aku ke kamu tinggi bangett,.\n\nngga barenggg kamuu sakitt samaa kamuu jugaa sakitt, aku seringg labill disituu sayang\n\n jujurr akuu rasanyaa mauu lepass tangann,karna akuu takutt kamu kedepannya sayanggg \n\nsudut pandang kamu ke aku hope you're doing okay, even though we’re not in each other’s lives anymore.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

