/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
class StringFormatter {
  removeNonUniqueChars(inputString) {
    const setChars = new Set(inputString);
    const filtered = [...setChars].join("");

    return filtered;
  }
}

class NumberFormatter extends StringFormatter {
  removeNonUniqueChars(input) {
    const setNumbers = new Set();
    let filtered = "";
    const isNumber = /\d/;
    for (let i = 0; i < input.length; i += 1) {
      if (isNumber.test(input[i])) {
        if (!setNumbers.has(input[i])) {
          setNumbers.add(input[i]);
          filtered += input[i];
        }
      } else {
        filtered += input[i];
      }
    }
    return filtered;
  }
}

class DateFormatter extends StringFormatter {
  removeNonUniqueChars(input) {
    const isValidDate =
      /(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}/g;
    const setDates = new Set();
    let filtered = "";
    let date = "";
    let previousMatchLastIndex = 0;
    while ((date = isValidDate.exec(input)) !== null) {
      filtered += input.substring(previousMatchLastIndex, date.index);
      previousMatchLastIndex = isValidDate.lastIndex;
      if (!setDates.has(date[0])) {
        filtered += date[0];
        setDates.add(date[0]);
      }
    }
    filtered += input.substring(previousMatchLastIndex);
    return filtered;
  }
}

class RegExpFormatter extends StringFormatter {
  constructor(pattern) {
    super();
    this.pattern = pattern;
  }

  removeNonUniqueChars(input) {
    const setMatched = new Set();
    let filtered = "";
    let match;
    let previousMatchLastIndex = 0;

    while ((match = this.pattern.exec(input)) !== null) {
      filtered += input.substring(previousMatchLastIndex, match.index);
      previousMatchLastIndex = this.pattern.lastIndex;
      if (!setMatched.has(match[0])) {
        filtered += match[0];
        setMatched.add(match[0]);
      }
    }
    filtered += input.substring(previousMatchLastIndex);
    return filtered;
  }
}

const songName = "the sea is a good place to think of the future";
const formatter = new StringFormatter();
console.log(`Input for remove non unique chars: ${songName}`);
console.log(formatter.removeNonUniqueChars(songName));

const pi = "PI=3,1415926535897932384626433";
const numberFormatter = new NumberFormatter();
console.log(`Input for remove non unique numbers: ${pi}`);
console.log(numberFormatter.removeNonUniqueChars(pi));

const textWithDates =
  "cool dates01/01/2000 01/01/2000 cool dates 03/01/2000 01/01/2000 cool dates 03/01/2000 01/07/2000  03/01/2000 cool dates";
const dateFormatter = new DateFormatter();
console.log(`Input for remove non unique dates: ${textWithDates}`);
console.log(dateFormatter.removeNonUniqueChars(textWithDates));

const text = `I must not fear. Fear is the mind-killer.
Fear is the little-death that brings total obliteration.
I will face my fear.
I will permit it to pass over me and through me.
And when it has gone past, I will turn the inner eye to see its path.
Where the fear has gone there will be nothing. Only I will remain.`;

const regExp = /fear/gi;
const regExpFormatter = new RegExpFormatter(regExp);
console.log(
  `Input for remove non unique strings find by pattern: ${regExp} from text:\n${text}`
);
console.log(regExpFormatter.removeNonUniqueChars(text));
