module.exports = {
    buscarRepositoriosDo
}

const request = require('request-promise');

async function buscarRepositoriosDo(user) {
    const options = {
        uri: `https://api.github.com/users/${user}/repos`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
     
    let repositories = await request(options);

    return repositories;
}
