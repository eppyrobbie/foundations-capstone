const primaryButton = $("#primary-button");
//------startup-------
$(document).ready(function () {
  randomPrimary();
  randomSecondary();
  randomAttachment1();
  randomAttachment2();
  randomAttachment3();
  randomAttachment4();
  randomAttachment5();
  randomAttachment6();
  randomAttachment7();
  randomAttachment8();
  randomAttachment9();
  randomAttachment10();
  randomPerk1();
  randomPerk2();
  randomTactical();
  randomLethal();
});

// function randomizeArray(arr) {
//     for (i = 0; i < arr.length; i++) {
//         x = Math.floor(Math.random() * arr.length);
//         y = Math.floor(Math.random() * arr.length);
//         if (x === y) { //for dont change arr[index] with self !!!
//             continue;
//         }
//         temp0 = arr[x];
//         arr[x] = arr[y];
//         arr[y] = temp0;
//     }
//     return arr
// }

 



//--------Get Primary Gun-----------
function randomPrimary() {
  axios
    .get("http://localhost:5005/getPrimary")
    .then((res) => {
      let primaryWeaponResults = res.data;
      let randomPrimary =
        primaryWeaponResults[
          Math.floor(Math.random() * primaryWeaponResults.length)
        ];
      console.log(randomPrimary.name);
     $('.primary').text(randomPrimary.name)
    })
    .catch((error) => {
      console.log(error);
    });
}



//--------Get Secondary Gun-----------------------------------
function randomSecondary() {
  axios
    .get("http://localhost:5005/getSecondary")
    .then((res) => {
      let secondaryWeaponResults = res.data;
      let randomSecondary =
        secondaryWeaponResults[
          Math.floor(Math.random() * secondaryWeaponResults.length)
        ];
      console.log(randomSecondary.name)
      $('.secondary').text(randomSecondary.name)
    })
    .catch((error) => {
      console.log(error);
    });
}

//--------Get First Perk-----------------------------------------
function randomPerk1() {
    axios
      .get("http://localhost:5005/getPerk1")
      .then((res) => {
        let perkResults = res.data;
        let randomPerk =
          perkResults[
            Math.floor(Math.random() * perkResults.length)
          ];
        console.log(randomPerk.name);
       $('.perk-name1').text(randomPerk.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //--------Get Second Perk-----------
  function randomPerk2() {
    axios
      .get("http://localhost:5005/getPerk2")
      .then((res) => {
        let perkResults = res.data;
        let randomPerk =
          perkResults[
            Math.floor(Math.random() * perkResults.length)
          ];
        console.log(randomPerk.name);
       $('.perk-name2').text(randomPerk.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //--------Get Attachments-----------
  function randomAttachment1() {
    axios
      .get("http://localhost:5005/getAttachment1")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.primary-attach-name-1').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment2() {
    axios
      .get("http://localhost:5005/getAttachment2")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.primary-attach-name-2').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment3() {
    axios
      .get("http://localhost:5005/getAttachment3")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.primary-attach-name-3').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment4() {
    axios
      .get("http://localhost:5005/getAttachment4")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.primary-attach-name-4').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment5() {
    axios
      .get("http://localhost:5005/getAttachment5")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.primary-attach-name-5').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment6() {
    axios
      .get("http://localhost:5005/getAttachment6")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.secondary-attach-name-1').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment7() {
    axios
      .get("http://localhost:5005/getAttachment7")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.secondary-attach-name-2').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment8() {
    axios
      .get("http://localhost:5005/getAttachment8")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.secondary-attach-name-3').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment9() {
    axios
      .get("http://localhost:5005/getAttachment9")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.secondary-attach-name-4').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomAttachment10() {
    axios
      .get("http://localhost:5005/getAttachment10")
      .then((res) => {
        let attachmentResults = res.data;
        let randomAttachment =
          attachmentResults[
            Math.floor(Math.random() * attachmentResults.length)
          ];
        console.log(randomAttachment.name);
       $('.secondary-attach-name-5').text(randomAttachment.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //--------Get Tactical and Lethal-----------
  function randomTactical() {
    axios
      .get("http://localhost:5005/getTactical")
      .then((res) => {
        let tacticalResults = res.data;
        let randomTactical =
          tacticalResults[
            Math.floor(Math.random() * tacticalResults.length)
          ];
        console.log(randomTactical.name);
       $('.tactical-name').text(randomTactical.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomLethal() {
    axios
      .get("http://localhost:5005/getLethal")
      .then((res) => {
        let lethalResults = res.data;
        let randomLethal =
          lethalResults[
            Math.floor(Math.random() * lethalResults.length)
          ];
        console.log(randomLethal.name);
       $('.lethal-name').text(randomLethal.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }




// function randomAttachment() {
//     let attachmentArray = []
//   axios
//     .get("http://localhost:5005/getAttachment")
//     .then((res) => {
//       attachmentArray.push(...res.data)
//       let shuffledArray = randomizeArray(attachmentArray)
//       let fiveAttacmentArray = shuffledArray.slice(0, 5)

//       console.log(fiveAttacmentArray);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }




//--------Save Loadout-----------
// function saveLoadout() {
//     let body = {

//     }
//     axios.post('/saveLoadout', body).then((res) => {
//         console.log(res.data)
//     })
// }





//--------Randomize Everything-----------
const randomClassButton = document.querySelector(".random-class")

function randomClass () {
    randomPrimary();
  randomSecondary();
  randomAttachment1();
  randomAttachment2();
  randomAttachment3();
  randomAttachment4();
  randomAttachment5();
  randomAttachment6();
  randomAttachment7();
  randomAttachment8();
  randomAttachment9();
  randomAttachment10();
  randomPerk1();
  randomPerk2();
  randomTactical();
  randomLethal();
}

randomClassButton.addEventListener("click", randomClass)


//--------Randomize Primary Gun and All Attachments-----------
const randomJustPrimary = document.querySelector(".randomize-just-primary")

function randomizeJustPrimary () {
    randomPrimary()
    randomAttachment1();
    randomAttachment2();
    randomAttachment3();
    randomAttachment4();
    randomAttachment5();
}

randomJustPrimary.addEventListener("click", randomizeJustPrimary)




//----------Randomize Second Gun and All Attachments--------------
const randomJustSecondary = document.querySelector(".randomize-just-secondary")

function randomizeJustSecondary () {
    randomAttachment6();
    randomAttachment7();
    randomAttachment8();
    randomAttachment9();
    randomAttachment10();
    randomSecondary();
}

randomJustSecondary.addEventListener("click", randomizeJustSecondary)



//--------------------------------------
//--------Get New Attachments-----------
const randomAttach1 = document.querySelector(".randomize-attach1")
function randomizeJustAttach1 () {
    randomAttachment1();
}
randomAttach1.addEventListener("click", randomizeJustAttach1)


const randomAttach2 = document.querySelector(".randomize-attach2")
function randomizeJustAttach2 () {
    randomAttachment2();
}
randomAttach2.addEventListener("click", randomizeJustAttach2)


const randomAttach3 = document.querySelector(".randomize-attach3")
function randomizeJustAttach3 () {
    randomAttachment3();
}
randomAttach3.addEventListener("click", randomizeJustAttach3)


const randomAttach4 = document.querySelector(".randomize-attach4")
function randomizeJustAttach4 () {
    randomAttachment4();
}
randomAttach4.addEventListener("click", randomizeJustAttach4)


const randomAttach5 = document.querySelector(".randomize-attach5")
function randomizeJustAttach5 () {
    randomAttachment5();
}
randomAttach5.addEventListener("click", randomizeJustAttach5)


const randomAttach6 = document.querySelector(".randomize-attach6")
function randomizeJustAttach6 () {
    randomAttachment6();
}
randomAttach6.addEventListener("click", randomizeJustAttach6)


const randomAttach7 = document.querySelector(".randomize-attach7")
function randomizeJustAttach7 () {
    randomAttachment7();
}
randomAttach7.addEventListener("click", randomizeJustAttach7)


const randomAttach8 = document.querySelector(".randomize-attach8")
function randomizeJustAttach8 () {
    randomAttachment8();
}
randomAttach8.addEventListener("click", randomizeJustAttach8)


const randomAttach9 = document.querySelector(".randomize-attach9")
function randomizeJustAttach9 () {
    randomAttachment9();
}
randomAttach9.addEventListener("click", randomizeJustAttach9)


const randomAttach10 = document.querySelector(".randomize-attach10")
function randomizeJustAttach10 () {
    randomAttachment10();
}
randomAttach10.addEventListener("click", randomizeJustAttach10)



//--------------Get Random Perks-------------------

const randomFirstPerk = document.querySelector(".randomize-perk1")
function randomizePerk1 () {
    randomPerk1()
}
randomFirstPerk.addEventListener("click", randomizePerk1)


const randomSecondPerk = document.querySelector(".randomize-perk2")
function randomizePerk2 () {
    randomPerk2()
}
randomSecondPerk.addEventListener("click", randomizePerk2)



//-------------Get Random Lethal or Tactical---------------
const randomTac = document.querySelector(".randomize-tactical")
function randomizeTac () {
    randomTactical()
}
randomTac.addEventListener("click", randomizeTac)


const randomLet = document.querySelector(".randomize-lethal")
function randomizeLet () {
    randomLethal()
}
randomLet.addEventListener("click", randomizeLet)

// const secondaryButton = document.querySelector("#secondary-button");

// function randomSecondary() {
//   axios
//     .get("http://localhost:5005/getSecondary")
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// secondaryButton.addEventListener("click", randomSecondary);

// const attachmentButton = document.querySelector(".attachments");

// function randomAttachment() {
//   axios
//     .get("http://localhost:5005/getAttachment")
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// attachmentButton.addEventListener("click", randomAttachment);
