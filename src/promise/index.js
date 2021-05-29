const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Woops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 200);
        } else {
            const error = new Error('Woooop!')
            reject(error)
        }
    })
}


somethingWillHappen2()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(error => {
        console.error(error);
    })