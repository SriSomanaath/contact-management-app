//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts =(req, res) => {
    res.status(200).json({ message: "Get all contacts" });
}
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
}

const createContact = (req, res) => {
    console.log("the requested body is:",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fieids are mandatory");
    }
    res.status(201).json({ message: `create all contacts ${req.params.id}` });
}

const updateContact =  (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
}

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
}


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};