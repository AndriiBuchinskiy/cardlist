const axios = require('axios');
const cheerio = require('cheerio');
const {formToJSON} = require("axios");

axios.get('https://epicentrk.ua/ua/shop/metallocherepitsa/').then(({data}) => {
    const $ = cheerio.load(data);
    let obj;
    const materials = $('.card')
        .map((_, material) => {
            const $material = $(material);
            const name = $material.find('.card__name').text();
            const price = $material.find('.card__price-row').text();

            return obj = {'name': name,'price': price};
        })

    // localStorage.setItem("materials", JSON.stringify(materials));
    //const myJson = JSON.stringify(obj);

    console.log(obj);

    //console.log(json);
});