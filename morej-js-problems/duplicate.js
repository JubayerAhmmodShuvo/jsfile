//remove duplicate numbers from an array

const names = ['David', 'Cynthia', 'Mike', 'Clayton', 'Raymond', 'Cynthia', 'abul', 'babul', 'babul', 'abul', 'babul', 'babul', 'abul'];

function removeDuplicate(names) {
    const uniqueNames = [];
    /*   for (let i = 0; i < names.length; i++) {
          const element = names[i];
          console.log(element);
      } */
    for (const element of names) {
        console.log(element);
        if (uniqueNames.indexOf(element) == -1) {
            uniqueNames.push(element);
        }
    }
    return uniqueNames;

}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);