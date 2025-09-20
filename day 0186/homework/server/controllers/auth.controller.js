// პაროლის უსაფრთო დამუშავება აკლია 
// არ აქვს ტოკენი რაც პრობლემურია 
// აკლია მონაცემთა ვალიდაცია 
// არ აქვს  შეცდომების მართვაც 

const { sign } = require("jsonwebtoken");
const User = require("../models/user.model");
const catchAsync = require("../utils/util");
const AppError = require("../utils/appError");
const jwt = require('jsonwebtoken')


const signUp = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body
    const newUser = await User.create({
        fullname,
        email,
        password
    })
    const token = jwt.sign({ id: newUser._id, role: newUser.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE });
    newUser.password = undefined

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    })

})

const login = catchAsync(async (req, res, next) => {
    // ვკითხულობთ მომხმარებლის მონაცემებს 
    const { email, password } = req.body
    // ვამოწმებთ არსებობს თუ არა მომხმარებელი შესაბამისი იმეილით 
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new AppError('Your email or password is incorrect', 404))
    }
    // ვამოწმებთ ჰეშირებულ პაროლსა და შემოტანილ პაროლს უდრის თ არა ერთმანეთს 
    const iscorrect = await user.comparePassword(password, user.password)
    if (!iscorrect) {
        return next(new AppError('Your email or password is incorrect', 404))
    }
    res.status(200).json(iscorrect)
})

module.exports = { signUp, login }