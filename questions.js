var name = prompt('What is your name? ')
var nameTitle = name[0].toUpperCase() + name.slice(1)

console.log('%cName:'+name,  "color: red");
confirm(`Nice to meet you, ${nameTitle}.`);

var age = prompt('What is your age? ')
console.log('%cAge:'+age,  "color: blue")
confirm(`${nameTitle}, you will be ${parseInt(age)+1} next year.`)

var worldcup = prompt('Did you watch the World Cup? (Yes or No) ')
console.log('%cWorldCup:'+worldcup,  "color: green")
if(worldcup.toLowerCase() === 'yes'){
    if(parseInt(age) >= 30){
        confirm(`${nameTitle}, you\'re an older soccer fan, eh?`)
    }
    else{
        confirm(`${nameTitle}, you\'re a younger soccer fan, eh?`)
    }
}

else if (worldcup.toLowerCase() === 'no'){
    confirm(`${nameTitle}, you\'re not a soccer fan, eh?`)
}
else{
    confirm(`${nameTitle}, you didn\'t give me a valid response`+
            ` follow directions better next time!`)
}

var website= prompt('Give me a website to display below.')
console.log('%cWebsite:'+website,  "color: yellow")

document.getElementById('name').innerHTML = nameTitle;
document.getElementById('age').innerHTML = age;
if(worldcup.toLowerCase() === 'yes'){
    document.getElementById('worldcup').innerHTML = 'watched';
}
else{
    document.getElementById('worldcup').innerHTML = "didn't watch";
}
document.getElementById('website').innerHTML = website;