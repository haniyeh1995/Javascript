// 1
function hashSet(array, input) {
    class MyHashSet {
        constructor() {
            this.set = {};
        }

        add(key) {
            this.set[key] = true;
            return null;
        }

        contains(key) {
            return this.set.hasOwnProperty(key);
        }

        remove(key) {
            if (this.contains(key)) {
                delete this.set[key];
            }
            return null;
        }
    }

    const myHashset = new MyHashSet()
    const result = [null]
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'add':
                result.push(myHashset.add(input[i]))
                break;
            case 'remove':
                result.push(myHashset.remove(input[i]))
                break;
            case 'contains':
                result.push(myHashset.contains(input[i]))
                break;
            default:
                break;
        }
    }
    return result
}

console.log(hashSet(["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"], [[], [1], [2], [1], [3], [2], [2], [2], [2]]))


// 2
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('Request timed out'));
        }, 5000);

        fetch(url)
            .then(response => {
                clearTimeout(timeout);

                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data);
                    }).catch(error => {
                        reject(new Error('Failed to parse JSON data'));
                    });
                } else {
                    reject(new Error(`Failed to fetch data. Status: ${response.status}`));
                }
            })
            .catch(error => {
                clearTimeout(timeout);
                reject(new Error('Failed to fetch data. Please check your network connection'));
            });
    });
}


const url = 'https://takhfifan.com/';
fetchData(url)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message);
    }); 

