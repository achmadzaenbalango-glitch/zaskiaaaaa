const message = `sayanggg andaii kamuu sadarr akuu tuhh ga debatinn apapunn, dank kamuu makin lamaa makinn berubah dann aga red flag gituu sayangg.\nakuu sebenernyaaa udaaa ga kuattt sayanggg sama kamuuu tapiii ntahh kenapaa rasaa sayanggg aku ke kamuu tinggii bangettt,.\n\nnggaa barenggg kamuu sakitt samaa kamuu jugaa sakitt, aku seringg labill disituu sayang\n\n jujurr akuu rasanyaa mauu lepass tangann,karna akuu takutt kamu kedepannya sayanggg \n\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore.`;

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
