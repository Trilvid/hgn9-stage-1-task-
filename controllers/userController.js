const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/../data.json`));


exports.getUser =  (req, res) => {
    console.log(res.requestTime);

    res.status(200).json({
        status: 'success',
        requestedAt: res.requestTime,
        results: data.length,
        data: {
            data
        }
    }); 
};
