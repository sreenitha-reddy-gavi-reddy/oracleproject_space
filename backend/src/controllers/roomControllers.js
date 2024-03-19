const UserroomData = require('../../models/userroom');
const loginData = require('../../models/login');

//ADD USER ROOM DATA

const AddUserroomData = async(req,res,next) =>{
    console.log("test")
    const {floornumber,roomnumber,roomtype,remarks} = req.body;
    const userroom =new UserroomData({
        floornumber,
        roomnumber,
        roomtype,
        remarks
    })
    try{
        await userroom.save()
    }catch(err){
        return console.log(err) 
    }
    return res.status(200).json({userroom})
}
exports.AddUserroomData=AddUserroomData;


//LOGIN USER ROOM DATA

const LoginUserData = async (req, res, next) => {
    console.log("test")
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await loginData.findOne({ email: email, password: password });
        
        // Check if user exists
        if (!existingUser) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // Check if user is an admin (Add your own logic here to determine admin status)
       

        // Proceed with successful login for admin
        return res.status(200).json({ message: "Login Successful.", existingUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.LoginUserData = LoginUserData;


const GetuserroomData = async(req,res, next) => {
    let userroomdata;
    try{
    userroomdata = await UserroomData.find();
    }catch(err){
    return console.log(err)
    }
    if(!userroomdata){
    return res.status(400).json({message:"No Users Found."})
    }
    return res.status(201).json({userroomdata})
}

exports.GetuserroomData=GetuserroomData;

  

 const roomDataById = async (req, res, next) => {
    const _id = req.params.id;
    await UserroomData.findById(_id)
    .then((response) => {
    res.status(200).json({msg:"successfully fetched single data",response});
    })
    .catch((error) => console.log(error));
    };
exports.roomDataById=roomDataById;

const UpdateSingleroom = async (req, res, next) => {
    const _id = req.params.id;
    console.log(req.body);
    let user = await UserroomData.findByIdAndUpdate(_id, req.body);
    user = await user
    .save()
    .then(() => {
    console.log("updated");
    return res.status(200).json({ message: "User updated successfully" });
    })
    .catch((er) => {
    console.log(er);
    return res.status(400).json({ message: "User not updated" });
    });
};
exports.UpdateSingleroom=UpdateSingleroom;


const DeleteroomData = async (req, res, next) => {
    const id = req.params.id;
    // console.log(user_ID)
    await UserroomData.findByIdAndDelete({_id:id})
    .then(() => {
    res.status(200).json({ message: "User data deleted succeffully"});
    console.log("data deleted succeffully");
    })
    .catch((er) => {
    res.status(400).json({ message: "user data not deleted" });
    console.log(er);
    });
    };
exports.DeleteroomData=DeleteroomData; 