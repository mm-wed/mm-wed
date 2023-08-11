const scriptURL = 'https://script.google.com/macros/s/AKfycbymGXLPdbzvqu2Rl_YU8cmuFzS0VEiEIE2F2zCejqmuUnh_LoHC24uZxHckuaEYP699/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                console.log('Success!', response);
                alert('Email successfully sent!');
                form.reset(); // Reset the form
            } else {
                console.error('Error!', response);
                alert('Error sending email. Please try again later.');
            }
        })
        .catch(error => console.error('Error!', error.message));
});
