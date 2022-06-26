'use strict'

let userName = prompt('Hello! Would you mind sharing your name with us? Thank you!');
    console.log(userName);

function yourName() {
    alert('Welcome, ' + userName + ', we hope you enjoy our About Me Page!')
    return document.write('Sayonara, ' + userName + ' we hope you enjoyed our About Me page, come back any time you like!');
}

function questionTree() {
    let i = 0;
    
    let question1 = prompt('Let\'s play a guessing game! Answer the following yes/no questions correctly and win a special prize!!!! First Question: Is my favorite color orange?');
    switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Sorry, that is incorrect - much to bright for me!');
        break;
    case 'no':
    case 'n':
        alert('You are correct!!!');
        i++;
        break;
    default:
        alert('Please answer by typing "yes" or "no" into this question prompt. "y" or "n" are also acceptable!');
    }
    
    let question2 = prompt('Ok, Question 2: Was I born in the US of A?');
    switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Bazinga! Correct!!!');
        i++;
        break;
    case 'no':
    case 'n':     
        alert('Sorry, that is incorrect - I was born in grand ol\' Bristol, PA! :)');
        break;
    default:
        alert('Please answer by typing "yes" or "no" into this question prompt. "y" or "n" are also acceptable!');
    }
    
    let question3 = prompt('Question 3: Am I a fan of both classic and (some) modern Hip-Hop?');
    switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Well done - correct!!');
        i++;
        break;
    case 'no':
    case 'n':     
        alert('Sorry, that is incorrect - I am indeed a fan of both classic and (some) modern Hip-Hop. Apologies if this question was confusing!');
        break;
    default:
        alert('Please answer by typing "yes" or "no" into this question prompt. "y" or "n" are also acceptable!');
    }
    
    let question4 = prompt('Question 4: Do I speak Spanish?');
    switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Sorry, that is incorrect - I speak French!!! (**I took French in High School/college and am now taking lessons as a refresher!!!)');
        break;
    case 'no':
    case 'n':
        alert('That is correct - I speak French!!! (**I took French in High School/college and am now taking lessons as a refresher!!!)');
        i++;
        break;    
    default:
        alert('Please answer by typing "yes" or "no" into this question prompt. "y" or "n" are also acceptable!');
    }
    
    let question5 = prompt('Question 5: Did I grow up playing soccer as my primary sport?');
    switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Correctomundo!!!! iva la joga bonito!!!');
        i++;
        break;
    case 'no':
    case 'n':     
        alert('Sorry, incorrect - I grew up playing the beautiful game and love it to this day!');
        break;
    default:
        alert('Please answer by typing "yes" or "no" into this question prompt. "y" or "n" are also acceptable!');
    }
    
    let question6 = prompt('Question 6: What is my favorite number? You get four guesses!');
    for (let count = 1; count < 4; count++) {
    if (question6 > 22) {
      question6 = prompt('Too high, guess again!');
    } else if (question6 < 22) {
      question6 = prompt('Too low, guess again!');
    } else if (question6 == 22) {
      alert('Nice job, that is correct!!!');
      i++;
      count = 4;
    } else {
      question6 = prompt('Make sure you guess a number!');
    }
    }

    let question7 = prompt('Question 7: Guess one City I have lived in (not counting Bristol since you already know that one! ;)) - you have six tries!)');
    let cities = ['New York', 'San Francisco', 'Denver', 'Chicago', 'Seattle', 'Cherry Hill'];

    for (let j = 1; j < 6; j++) {
        let k = 0;
        while (k <= 5) {
            if (question7 === cities[k]) {
                alert('That\'s correct! I have lived in Cherry Hill, Seattle, Chicago, San Francisco, New York, and now Denver!');
                i++;
                j = 6;
                break;
            } else if (question7 !== cities[k]) {
                k++;
            }
        }
        if (question7 !== cities[k]) {
            question7 = prompt('Sorry, that\'s incorrect, try again');
        }
    }
    
    if (i === 7) {
    alert('Nice job, you scored: ' + i + ' points! A perfect score!');
    } else {
    alert('You scored: ' + i + ' points! Let\'s try again and better luck next time!');
    }
}

yourName()
questionTree()
