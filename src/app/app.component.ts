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
    '||',
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
  }
  generatePassword() {}
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
