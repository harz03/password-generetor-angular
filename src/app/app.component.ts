import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passowordLength: number;
  public static alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  public static number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  public static specialCharacter = [
    '+',
    '-',
    '&&',
    '|',
    '!',
    '(',
    ')',
    '{',
    '}',
    '[',
    ']',
    '^',
    '~',
    '*',
    '?',
    ':',
  ];
  alpahbetChekbox = false;
  numberCheckbox = false;
  specialCharacterCheckbox = false;
  password: string = '';

  constructor() {
    this.passowordLength = 0;
    this.alpahbetChekbox = true;
    this.numberCheckbox = true;
    this.specialCharacterCheckbox = true;
  }

  generatePassword() {
    let first = this.passowordLength / 3;
    let second = this.passowordLength / 3;
    let last = this.passowordLength - first - second;
    let arr = [];
    for (let i = 0; i < first; ++i) {
      arr.push(
        AppComponent.alphabet[
          Math.floor(Math.random() * AppComponent.alphabet.length)
        ]
      );
    }
    for (let i = 0; i < first; ++i) {
      arr.push(
        AppComponent.specialCharacter[
          Math.floor(Math.random() * AppComponent.specialCharacter.length)
        ]
      );
    }
    for (let i = 0; i < first; ++i) {
      arr.push(
        AppComponent.number[
          Math.floor(Math.random() * AppComponent.number.length)
        ]
      );
    }
    this.password = arr.join('');
  }

  changealpahbetChekbox() {
    this.alpahbetChekbox = !this.alpahbetChekbox;
  }

  changespecialCharacterCheckbox() {
    this.specialCharacterCheckbox = !this.specialCharacterCheckbox;
  }

  changenumberCheckbox() {
    this.numberCheckbox = !this.numberCheckbox;
  }
}
