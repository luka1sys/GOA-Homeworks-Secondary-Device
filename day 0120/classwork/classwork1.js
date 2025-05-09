// async await - ის გამოყენებით გააგზავნეთ მოთხოვნა https://jsonplaceholder.typicode.com/posts, try catch - ით 
// დარწმუნდით გამოიწვევს თუ არა ეს კოდი რაიმე error - ს,
//  თუ გამოიწვევს catch - ის გამოყენებით console - ში გამოიტანეთ ეს error - ი

const fetchDate = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("error");
        }

        const data = await res.json();
        console.log(data);


    } catch (error) {
        console.log(error);


    }
};
fetchDate("https://jsonplaceholder.typicode.com/posts");