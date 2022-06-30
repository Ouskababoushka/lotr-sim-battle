import { Controller } from "stimulus"

export default class extends Controller {

  connect() {

    function isGood(soldierType) {
      if (soldierType === "Hobbits" || soldierType === "Elves" || soldierType === "Dwarves" || soldierType === "Eagles") {
        return true;
      }
      return false;
    };

    const epicBattle = `Hobbits:${Math.floor(Math.random() * 10)},Dwarves:${Math.floor(Math.random() * 10)},Elves:${Math.floor(Math.random() * 10)},Goblins:${Math.floor(Math.random() * 10)},Uruk-hai:${Math.floor(Math.random() * 10)},Orcs:${Math.floor(Math.random() * 10)}`;
    // console.log(typeof epicBattle);

    function buildSoldierObject(epicBattle) {
      const myBattlefield = {};

      epicBattle.split(',').forEach((element) => {
        const key = element.split(":")[0];
        const value = parseInt(element.split(":")[1], 10);

        myBattlefield[key] = value;
      });
      return myBattlefield;
    };

    console.log(buildSoldierObject(epicBattle));

    let sumGood = 0;
    let sumEvil = 0;

    function whoWinsTheWar(epicBattle) {
      const myBattlefield = buildSoldierObject(epicBattle);

      Object.entries(myBattlefield).forEach((entry) => {
        const [key, value] = entry;
        if (isGood(key) === true) {
          sumGood += value;
        } else {
          sumEvil += value;
        }
      });

      let win = "";
      if (sumGood > sumEvil) {
        win = "Good";
      }
      if (sumGood < sumEvil) {
        win = "Evil";
      }
      if ((sumGood === sumEvil) || ((sumGood + sumEvil) === 0)) {
        win = "Tie";
      }
      return win;
    };

    console.log(whoWinsTheWar(epicBattle));

    console.log(sumGood)
    console.log(sumEvil)

    const armyGood = document.querySelector(".soldier-good")
    for (let i = 0; i < sumGood; i++ ) {
      const img = document.createElement('img')
      img.src = "https://cdn-icons-png.flaticon.com/512/1618/1618867.png"
      img.height = 50;
      img.width = 50;
      armyGood.appendChild(img)
    }

    const armyEvil = document.querySelector(".soldier-evil")
    for (let i = 0; i < sumEvil; i++ ) {
      const img = document.createElement('img')
      img.src = "https://cdn-icons-png.flaticon.com/512/1615/1615645.png"
      img.height = 50;
      img.width = 50;
      armyEvil.appendChild(img)
    }


  }
}
