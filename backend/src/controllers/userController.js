const UserData=require('../../models/userfood');
const AddUserData=async(req,res,next)=>{
    console.log("test")
    const{guest,reference,dates,veglunch,tea,vegdinner,nonveglunch,dinnerquantity,team,visit,text,breakfast,nvmenu,snacks,coffee,nvdinner}=req.body;
    const userfood=new  UserData({
        guest,
        reference,
        dates,
        veglunch,
        tea,
        vegdinner,
        nonveglunch,
        dinnerquantity,
        team,
        visit,
        text,
        breakfast,
        nvmenu,
        snacks,
        coffee,
        nvdinner,
    })
    try{
        await userfood.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(200).json({userfood})
}
const GetUserData = async(req,res, next) => {
    let users;
    try{
    users = await UserData.find();
    }catch(err){
    return console.log(err)
    }
    if(!users){
    return res.status(400).json({message:"No Users Found."})
    }
    return res.status(200).json({users})
}
const DeleteUserData = async (req, res, next) => {
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
}
const UserDataById = async (req, res, next) => {
    const _id = req.params.id;
    await UserData.findById(_id)
    .then((response) => {
    res.status(200).json({msg:"successfully fetched singledata",response});
    })
    .catch((error) => console.log(error));
}
const UpdateSingleUser = async (req, res, next) => {
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
}
exports.GetUserData = GetUserData;
exports.UserDataById = UserDataById;
exports.DeleteUserData = DeleteUserData;
exports.UpdateSingleUser = UpdateSingleUser;
exports.AddUserData=AddUserData;