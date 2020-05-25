import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
  //   console.log(`
  //     About to generate a password with the following:
  //       Includes Letters: ${this.includeLetters}
  //       Includes Numbers: ${this.includeNumbers}
  //       Includes Symbols: ${this.includeSymbols}
  //   `);
  //   this.password = "My Password!!";
  // };
    const Numbers = "1234567890";
    const Letters = "abcdefghijklmnopqrstuvyxz";
    const Symbols = "!@$%#*&^";

    let validChars = "";
    if(this.includeLetters){
      validChars += Letters;
    }
    if(this.includeNumbers){
      validChars += Numbers;
    }
    if(this.includeSymbols){
      validChars += Symbols;
    }
  
    let generatedPassword ="";
      for(let i = 0; i < this.length; i++){
        const index = Math.floor(Math.random()* validChars.length);
        generatedPassword += validChars[index];
      }
    this.password = generatedPassword;
  }
}

