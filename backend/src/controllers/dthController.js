const UserData = require('../../models/userdth');
const AddDthData = async(req,res,next) =>{
    console.log("test")
    const {floornumber,roomnumber,DTHCompany,CardNumber,Rechargeon,Rechargeexpired,Remainder,Remarks} = req.body;
    const userinfo =new UserData({
        floornumber,
        roomnumber,
        DTHCompany,
        CardNumber,
        Rechargeon,
        Rechargeexpired,
        Remainder,
        Remarks
    })
    try{
        await userinfo.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(200).json({userinfo})
}
exports.AddDthData=AddDthData;

const GetDthData = async(req,res, next) => {
    let users;
    try{
    users = await UserData.find();
    }catch(err){
    return console.log(err)
    }
    if(!users){
    return res.status(400).json({message:"No Users Found."})
    }
    return res.status(201).json({users})
    }
exports.GetDthData=GetDthData;

const DeleteDthData = async (req, res, next) => {
    const id = req.params.id;
    // console.log(user_ID)
    await UserData.findByIdAndDelete({_id:id})
    .then(() => {
    res.status(200).json({ message: "User data deleted succeffully"});
    console.log("data deleted succeffully");
    })
    .catch((er) => {
    res.status(400).json({ message: "user data not deleted" });
    console.log(er);
    });
    };
exports.DeleteDthData=DeleteDthData; 

const UserDthById = async (req, res, next) => {
    const _id = req.params.id;
    await UserData.findById(_id)
    .then((response) => {
    res.status(200).json({msg:"successfully fetched single data",response});
    })
    .catch((error) => console.log(error));
    };
exports.UserDthById=UserDthById;

const UpdateDthUser = async (req, res, next) => {
    const _id = req.params.id;
    console.log(req.body);
    let user = await UserData.findByIdAndUpdate(_id, req.body);
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
exports.UpdateDthUser=UpdateDthUser;
