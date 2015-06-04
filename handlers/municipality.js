
var municipalityArray = require(__dirname + '/suomen-kunnat.json');

function findMunicipality(municipalityArray, municipality) {
    var i = 0;
    for (i = 0; i < municipalityArray.length; i++) {
        if (municipalityArray[i].kunta === municipality) {
            console.log("Municipality found: " + municipalityArray[i].kunta);
            return municipalityArray[i];
        } else {
            console.log("Municipality not found");
        }
    }
}

exports.find = function (request, reply) {
    console.log('request.params.kunta:', + request.params.kunta);
    reply(findMunicipality(municipalityArray, request.params.kunta));
};