   //promise
   
    let promise = new Promise(function(resolve, reject) {
    const x = "This is Guna ";
    const y = "This is Guna "
    if(x === y) {
        resolve();
    } 
    else {
        reject();
    }
    });

    promise.
        then(function () {
            console.log('Success, Welcome Guna');
        }).
        catch(function () {
            console.log('Failed');
        });

        //hoisting
        console.log(add(7845.36,88.69));

        function add(x,y){
            let num1 = x;
            let num2 = y;
            return num1+num2;
        }