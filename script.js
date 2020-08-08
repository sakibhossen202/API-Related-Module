for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);         
}

const addNumber = (num1,num2) => num1 + num2;
   
    


console.log(addNumber(12,14))




// const postInfo = {title: 'food',body: 'bar', userId: 1}

//         fetch('https://jsonplaceholder.typicode.com/posts', {
//           method: 'POST',
//           body: JSON.stringify(postInfo),
//           headers: {
//             "Content-type": "application/json; charset=UTF-8"
//           }
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))


        const addNumbers = (num1,num2) => {
            const multipleNumber = num1 * num2;
            const divisionNumber = num1 / num2;
            const difference = multipleNumber - divisionNumber;
            
            return Math.round(difference);
            
        };

        console.log(addNumbers(12,115))
            
       
   