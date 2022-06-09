'use strict'

let userName = prompt('Hello! Would you mind sharing your name with us? Thank you!');
console.log(userName);

function yourName() {
    alert('Welcome, ' + userName + ', we hope you enjoy our About Me Page!')
    return document.write('Sayonara, ' + userName + 'we hope you enjoyed our About Me page, come back any time you like!');
}

function questionTree() {
    let question1 = confirm('Were you born between the years 1880 and 2022?');
    let message = "";

    if(question1 == true) {
        let dinoRad = confirm('Amazing! Glad to know you are alive, ' + userName + '. Do you think Dinosaurs are rad?');

        if(dinoRad == true) {
            let director = confirm('We also think Dinosaurs are rad, ' + userName + ' who is alive! Do you enjoy Steven Spielberg films?');

            if(director == true) {
                let dinoMov = confirm(userName + ' who is alive, you are really on a roll here. Does your favorite Steven S. film include Dinosaurs???!!??');

                if(dinoMov == true) {
                    let finalQuestion = confirm(userName + 'you are truly on a roll! Last question: is your Steven Spielberg film Jurassic Park, released in 1993!?!?!?');

                    if(finalQuestion == true) {
                        alert(userName + ', so glad you enjoy Jurassic Park! We think you are really going to enjoy our page 😉');
                    }
                    else {
                        alert(userName + 'that is surprising because you are alive and seem to enjoy Steven Spielbergs Dinosaur films.... What are these other, cherished Dinosaur-related Steven Spielberg movies you seem to think are better than Jurassic Park released in 1993?');
                    }
                }
            }
            else {
                message = 'Steven S. has a large film library from which to choose, understandable that your favorite Steven S. film may not include Dinosaurs 😔';
                alert(message)
            }
        }
        else {
            prompt('No problem, ' + userName + 'Steven S. may not be to everyones directorial taste. Who is your favorite director?')
        }
    }
    else {
        let possResponse = ('old','future')
        prompt('Wow! Are you incredibly old or from the future?')
        // Want to add code here that will accept only responses that includes either the word old or future /not both/ within a certain character limit
        if(possResponse == 'old') {
            message = 'We love that, please share your tips on leading such a long and healthy life!'
            alert(message)
        }
        else {
            message = 'Wow, how did you get here? Wormhole? We have so many questions'
            alert(message)
        }
        }
    }

yourName()
questionTree()
