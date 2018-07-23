//         console.log('hello world');

        var username = prompt(‘what is your name’);
        console.log(‘user name is’, username);

        alert('hi' + username + '! Nice to meet you');
        
        var favoriteFood = prompt ('What is your favorite color?');

        alert('wow' + username + ', didn\'t know you like' + favoriteFood) //use previous variables as you go through

        var lovesCats = prompt('Do you love cats?');

        if(lovesCats === 'Yes' || lovesCats === 'yes') {
            alert('Of course!' + username + '!' + 
            'Who doesn\'t loves cats, and they share your' + 
            favoriteFood);
        }
        else {
            alert('Wow, that\'s suprising' + username +
            'I bet you eat' + favoriteFood + 'alone');
        }