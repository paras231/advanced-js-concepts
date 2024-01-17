import { userArray } from "./constants.js";
  



export function iterateThroughNames(){
    let userNames = [];
    let otherNames = [];
    for (let i = 0; i < userArray.length; i++) {
        if(userArray[i].username.startsWith('a')){
           const combinedName = userArray[i].username.split('_').join('');
           userNames.push(combinedName);
        }else{
            otherNames.push(userArray[i].username);
        }
    }

     return {
        userNames,
        otherNames
     };
}

export function playWithAge(){
    let ages = [...userArray];
    // sort user by their ages-:
    for (let i = 0; i < ages.length - 1; i++) {
        for (let j = 0; j < ages.length - 1 - i; j++) {
            if (ages[j].age % 5 == 0 && ages[j + 1].age % 5 == 0) {
                if (ages[j].age > ages[j + 1].age) {
                    // Swap the values
                    let temp = ages[j].age;
                    ages[j].age = ages[j + 1].age;
                    ages[j + 1].age = temp;
                }
            }
        }
    }


    return ages;
}

export function filterByAge() {
    const data = [...userArray];
    let users = [];
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].age % 2 === 0) {
            // remove gender property
            delete data[i].gender;

            users.push(data[i]);
        }
    }

    return users;
}



export function pairUserByAges(){
    const users = [...userArray];
    let usersIn20s = [];
    let usersIn30s = [];
    //  we need to pair users by their starting value of age , for example 20 to 29 will be in same and array and 30 to 39 will be separate array.
    for (let i = 0; i < users.length; i++) {
        let ages = users[i].age.toString();
        if(ages.startsWith('2')){
         usersIn20s.push(users[i]);
        }else{
            usersIn30s.push(users[i]);
        }
    }
    return {
        usersIn20s,
        usersIn30s
    }
}