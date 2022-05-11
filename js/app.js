import {Character} from './character.js';

export const image = [];
image["warrior"] = "assets/img/warrior.png";
image["mage"] = "assets/img/mage.png";
image["hunter"] = "assets/img/hunter.png";

const warrior = new Character('warrior', 200, 50, 80);
const mage = new Character('mage', 100, 100, 20);
const hunter = new Character('hunter', 150, 70, 40);

warrior.mostrar();
mage.mostrar();
hunter.mostrar();



