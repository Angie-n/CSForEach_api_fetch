const getCompatibility = async e => {
    e.preventDefault();
    const url = 'https://api.api-ninjas.com/v1/quotes'
    const options = {
        method: 'GET',
        headers: { 'X-Api-Key': 'Zu+6D45UltmDF1wjvGYfvg==fs854tlZmcDQ9tq4'},
    };

    try {
        document.getElementById('quote-result').textContent = "Loading...";
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('quote-result').textContent = result[0].quote + '\n -' + result[0].author;
    } catch (error) {
        console.error(error);
    }
}

document.getElementsByTagName('form')[0].onsubmit = (e) => {getCompatibility(e)};