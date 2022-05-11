// class character
import {image} from './app.js';

export class Character {
    constructor(name, life, attack, defense) {
        this.imagen = new Image();
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.defense = defense;

        this.imagen.src = image[this.name];
    };

    talk() {
        alert(this.name);
    };

    mostrar() {
        const main = document.querySelector('.main');
        main.innerHTML += (`<section class="tarjeta">
                                        <div class="tarjeta__img">
                                            <img src="${this.imagen.src}" alt="${this.name}" class="tarjeta__imagen">
                                        </div>
                                        <div class="tarjeta__text">
                                            <p class="tarjeta__p">
                                                ${this.name}
                                            </p>
                                        </div>
                                        <ul class="tarjeta__stats">
                                            <li class="tarjeta__item">
                                                life: ${this.life}
                                            </li>
                                            <li class="tarjeta__item">
                                                attack: ${this.attack}
                                            </li>
                                            <li class="tarjeta__item">
                                                defense: ${this.defense}
                                            </li>
                                        </ul>
                                    </section>`);
    };
};