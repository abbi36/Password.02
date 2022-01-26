import input from 'input';

async function main() {
    const answer = 'password1';
    let response;

    while(response != answer) {
        response = await input.text('What is the password?');
    } if (response = answer) {
        console.log('Correct!');

    } else {
        console.log('Incorrect.');

    }  
}

main();