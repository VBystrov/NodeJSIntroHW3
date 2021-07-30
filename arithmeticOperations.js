class NumberConverter {
  toArabic(num) {
    return `${num}`;
  }

  toRoman(num) {
    const onesAlphabet = [
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ];
    const tensAlphabet = [
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
    ];
    const hundredsAlphabet = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
    ];
    const thousandsAlphabet = ["", "M", "MM", "MMM", "MMMM"];

    const thousands = thousandsAlphabet[Math.floor(num / 1000)];
    const hundreds = hundredsAlphabet[Math.floor(num / 100) % 10];
    const tens = tensAlphabet[Math.floor(num / 10) % 10];
    const ones = onesAlphabet[num % 10];

    return `${thousands}${hundreds}${tens}${ones}`;
  }

  toMorse(num) {
    const alphabetMorse = new Map([
      ["0", "‒ ‒ ‒ ‒ ‒"],
      ["1", "• ‒ ‒ ‒ ‒"],
      ["2", "• • ‒ ‒ ‒"],
      ["3", "• • • ‒ ‒"],
      ["4", "• • • • ‒"],
      ["5", "• • • • •"],
      ["6", "‒ • • • •"],
      ["7", "‒ ‒ • • •"],
      ["8", "‒ ‒ ‒ • •"],
      ["9", "‒ ‒ ‒ ‒ •"],
      [".", "• • • • • •"],
    ]);
    const numberText = `${num}`;
    let output = "";
    for (let i = 0; i < numberText.length; i += 1) {
      output += `${alphabetMorse.get(numberText[i])}   `;
    }
    return output;
  }
}

class Adder extends NumberConverter {
  add(outputSystem, ...numbers) {
    const sum = numbers.reduce((s, number) => s + number);
    let output;
    switch (outputSystem) {
      case "arabic":
        output = this.toArabic(sum);
        break;
      case "roman":
        output = this.toRoman(sum);
        break;
      case "morse":
        output = this.toMorse(sum);
        break;
      default:
        break;
    }
    return output;
  }
}

class Subtractor extends NumberConverter {
  subtract(outputSystem, ...numbers) {
    const difference = numbers.reduce((minuend, number) => minuend - number);
    let output;
    switch (outputSystem) {
      case "arabic":
        output = this.toArabic(difference);
        break;
      case "roman":
        output = this.toRoman(difference);
        break;
      case "morse":
        output = this.toMorse(difference);
        break;
      default:
        break;
    }
    return output;
  }
}

class Multiplicator extends NumberConverter {
  multiply(outputSystem, ...numbers) {
    const product = numbers.reduce((factor, number) => factor * number);
    let output;
    switch (outputSystem) {
      case "arabic":
        output = this.toArabic(product);
        break;
      case "roman":
        output = this.toRoman(product);
        break;
      case "morse":
        output = this.toMorse(product);
        break;
      default:
        break;
    }
    return output;
  }
}

class Divider extends NumberConverter {
  divide(outputSystem, ...numbers) {
    const fraction = numbers.reduce((divident, divisor) => divident / divisor);
    let output;
    switch (outputSystem) {
      case "arabic":
        output = this.toArabic(fraction);
        break;
      case "roman":
        output = this.toRoman(fraction);
        break;
      case "morse":
        output = this.toMorse(fraction);
        break;
      default:
        break;
    }
    return output;
  }
}

const adder = new Adder();
console.log(adder.add("arabic", 5, 4, 7));
console.log(adder.add("roman", 5, 4, 7));
console.log(adder.add("morse", 5, 4, 7));

const subtractor = new Subtractor();
console.log(subtractor.subtract("arabic", 25, 10, 3));
console.log(subtractor.subtract("roman", 25, 10, 3));
console.log(subtractor.subtract("morse", 25, 10, 3));

const multiplicator = new Multiplicator();
console.log(multiplicator.multiply("arabic", 3, 3, 3));
console.log(multiplicator.multiply("roman", 3, 3, 3));
console.log(multiplicator.multiply("morse", 3, 3, 3));

const divider = new Divider();
console.log(divider.divide("arabic", 48, 2, 2));
console.log(divider.divide("roman", 48, 2, 2));
console.log(divider.divide("morse", 48, 2, 2));
