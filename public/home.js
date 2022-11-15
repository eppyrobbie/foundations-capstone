const primaryButton = $("#primary-button");

$(document).ready(function () {
  randomPrimary();
  randomSecondary();
  randomAttachment1();
  randomAttachment2();
  randomAttachment3();
  randomAttachment4();
  randomAttachment5();
  randomPerk();
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


function randomPerk() {
    axios
      .get("http://localhost:5005/getPerk")
      .then((res) => {
        let perkResults = res.data;
        let randomPerk =
          perkResults[
            Math.floor(Math.random() * perkResults.length)
          ];
        console.log(randomPerk.name);
       $('.perk-box').text(randomPerk.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
       $('.attachment1').text(randomAttachment.name)
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
       $('.attachment2').text(randomAttachment.name)
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
       $('.attachment3').text(randomAttachment.name)
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
       $('.attachment4').text(randomAttachment.name)
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
       $('.attachment5').text(randomAttachment.name)
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

function saveLoadout() {
    let body = {
        priamryWeapon: 'm4',
        secondaryWeapon: 'pistol'
    }
    axios.post('http://localhost:5005/saveLoadout', body).then((res) => {
        console.log(res.data)
    })
}


primaryButton.click(() => {
    saveLoadout()
})





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
