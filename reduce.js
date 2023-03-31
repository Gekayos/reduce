//  #1

const arr = [
{ name: 'Ellie' }, 
{ name: 'Joel' }, 
{name: 'Erica' }, 
{ name: 'Sam' }]

function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

// #2

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let loCased = next.toLowerCase()
        if(vowels.indexOf(loCased) !== -1){
            if(acc[loCased]){
                acc[loCased]++;
            } else {
                acc[loCased] = 1;
            }
        }
        return acc;
    }, {});
}


//  #3

const arr2 = [
    { name: 'Ellie' }, 
    { name: 'Joel' }, 
    {name: 'Erica' }, 
    { name: 'Sam' }]


    function addKeyAndValue(arr, key, value){
        return arr.reduce(function(acc,next,idx){
            acc[idx][key] = value;
            return acc;
        },arr);
    }



//   #4  

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}