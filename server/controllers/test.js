exports.getTest = (req, res, next) => {
    return res.status(200).json({
        name: "sachin",
        age: 27
    });
}