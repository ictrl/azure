module.exports = async function (context, req) {
    let axios = require('axios');

    const getGender = async () => {
        try {
            return await axios.get('https://api.genderize.io/?name=' + req.query.name)
        } catch (error) {
            console.error(error)
        }
    }

    await getGender().then((res) => {
        context.res = {
            body: res.data.gender
        };
    });
};