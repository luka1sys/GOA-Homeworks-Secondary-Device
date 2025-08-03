const http = require('http') //  ვაიმპორტებთ მოდულს
const message = []  // ვქმნით მასივს შემოსული მეიჯების მისაღებად

const server = http.createServer((req, res) => {  // ვქმნით HTTP სერვერს, რომელიც იღებს request (req) და response (res) ობიექტებს
    // ვამოწმებთ თუ url არის message და მეთოდი პოსტია მაშინ ვუშვებთ შემდეგ კოდს 
    if (req.url === '/messages' && req.method === 'POST') {

        let body = ''//ვქმნით ცვლადს რომ შემომავალი მონაცემები შევინაოხოთ  
        req.on('data', chunk => {
            // 'data' ივენთი იწვევს როდესაც შემოდის request-ის ნაწილი (chunk)
            body += chunk.toString();// ვამატებთ body ში 

        })
        req.on('end', () => {// 'end' ივენთი იწვევს, როცა ყველა მონაცემი უკვე ჩამოვიდა მთლიანად
            const parsed = JSON.parse(body); //// body სტრიქონს ვაქცევთ ობიექტად JSON ფორმატში
            message.push(parsed); //// Parsed ობიექტს ვამატებთ message მასივში
            console.log('Message saved') //// კონსოლში ვაჩვენებთ შეტყობინებას, რომ მესიჯი შენახულია
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(message)); // // ვაგზავნით მომხმარებელს JSON ფორმატში ყველა შეტყობინებას, რომლებიც შეგროვდა

        })
        // თუ მოთხოვნა არ ემთხვევა ზემოთ მოცემულს (ან URL განსხვავდება, ან მეთოდი სხვაა)
    } else {

        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify('error')); //კონსოლში გამოგვაქ JSON ფორმატში ტექსტს 'error'
    }

})
//// სერვერი ვუსმენთ 3000 პორტს, და როდესაც დაიწყებს მუშაობას, ვიძახებთ callback ფუნქციას
server.listen(3000, () => {
    console.log('server is runing ') //კონსოლში გამოგვაქ რომ სერვერი გაშვებულია 
})