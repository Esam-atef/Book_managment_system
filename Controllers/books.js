const bookSchema = require("../Schema/book")

exports.getAllBooks = async (req, res) => 
{
    try 
    {
        const books = await bookSchema.find()
        res.json({ message: "All Books : ", data: books });
    } 
    catch (err) 
    {
        res.status(400).json({ message: "Something went wrong : ", error: err.message });
    }
}

exports.getOneBooks = async (req, res) => 
{
    try 
    {
        const book = await bookSchema.find({ _id: req.params.id });
        res.json({ message: "Book : ", data: book });
    } 
    catch (err) 
    {
        res.status(400).json({ message: "Something went wrong : ", error: err.message });
    }
};

exports.DeleteBooks = async (req, res) => 
{
    try 
    {
        if (req.user.role === "admin") 
        {
        await bookSchema.findByIdAndDelete(req.params.id);
        res.json({ message: "Done", data: [] });
        } 
        else 
        {
        res.status(403).json({ message: "You don't have permission: " });
        }
    } 
    catch (err) 
    {
        res.status(400).json({ message: "Something went wrong : ", error: err.message });
    }
};

exports.UpdateBooks = async (req, res) => 
{
    try 
    {
        await bookSchema.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Done", data: [] });
    } 
    catch (err) 
    {
        res.status(400).json({ message: "Something went wrong : ", error: err.message });
    }
};

exports.CreateBooks = async (req, res) => 
{
    try 
    {
        if (req.user.role === "admin") 
        {
        const CreatedBook = await bookSchema.create(req.body);
        res.json({ message: "Done", data: CreatedBook });
        } 
        else 
        {
        res.status(403).json({ message: "You don't have permission: " });
        }
    } 
    catch (err) 
    {
        res.status(400).json({ message: "Something went wrong : ", error: err.message });
    }
};
