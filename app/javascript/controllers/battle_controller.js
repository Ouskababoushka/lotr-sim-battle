import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [""]


  isGood = (soldierType) => {
    if (soldierType === "Hobbits" || soldierType === "Elves" || soldierType === "Dwarves" || soldierType === "Eagles") {
      return true;
    }
    return false;
  };

  buildSoldierObject = (battlefield) => {
    const myBattlefield = {};
    battlefield = battlefield.split(",");

    battlefield.forEach((element) => {
      const key = element.split(":")[0];
      const value = parseInt(element.split(":")[1], 10);

      myBattlefield[key] = value;
    });
    return myBattlefield;
  };

  whoWinsTheWar = (battlefield) => {
    const soldiers = buildSoldierObject(battlefield);

    let sumGood = 0;
    let sumEvil = 0;

    Object.entries(soldiers).forEach((entry) => {
      const [soldier, value] = entry;
      if (isGood(soldier) === true) {
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

  randomSolider = () => {
    epicBattle = `Hobbits:${Math.floor(Math.random() * 10)},Dwarves:${Math.floor(Math.random() * 10)},Elves:${Math.floor(Math.random() * 10)},Goblins:${Math.floor(Math.random() * 10)},Uruk-hai:${Math.floor(Math.random() * 10)},Orcs:${Math.floor(Math.random() * 10)}`;
  }

  whoWinsTheWar(epicBattle);
}
