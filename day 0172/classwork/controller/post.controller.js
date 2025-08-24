const posts = [
    {
        id: 1,
        title: "JavaScript Basics",
        author: "Luka Dgebuadze",
        description: "პოსტი სადაც ვსწავლობ JavaScript-ის საფუძვლებს.",
        comments: []
    },
    {
        id: 2,
        title: "Learning HTML",
        author: "Anna K.",
        description: "HTML-ის შესავალი — როგორ მუშაობს სტრუქტურა და თეგები.",
        comments: []
    },
    {
        id: 3,
        title: "CSS Styling",
        author: "David M.",
        description: "სტილი და დიზაინი CSS-ით, როგორ გავხადოთ გვერდი ლამაზი.",
        comments: []
    },
    {
        id: 4,
        title: "Node.js Server",
        author: "Nino B.",
        description: "როგორ შევქმნათ სერვერი Node.js-ით და ვიმუშაოთ როუტებთან.",
        comments: []
    },
    {
        id: 5,
        title: "React Components",
        author: "Giorgi T.",
        description: "React-ში კომპონენტების შექმნა და მათი ხელახლა გამოყენება.",
        comments: []

    }
];

const get = (req, res) => {
    res.json(posts);
}

const getById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(c => c.id === id);
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    };
    res.json(post);
};
const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Post not found" });
    };
    const post = posts.splice(index, 1);
    res.json(post);
}

const addPost = (req, res) => {

    const { id, title, author, description } = req.body;
    const newPost = {
        id,
        title,
        author,
        description
    };
    posts.push(newPost);
    res.status(201).json(newPost);


}

const changePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Post not found" });
    }
    const updatedPost = { ...posts[index], ...req.body };
    posts[index] = updatedPost;
    res.json(updatedPost);
}


module.exports = { get, getById, deletePost, addPost, changePost,};