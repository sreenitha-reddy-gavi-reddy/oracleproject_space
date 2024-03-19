const repairData=require('../../models/userepair');
const AddRepairData=async(req,res,next)=>{
    const{floor,roomnumber,roomtype,work,workstart,workend,state,workdelay}=req.body.formdata;
    const maintainData=new  repairData({
        floor,
        roomnumber,
        roomtype,
        work,
        workstart,
        workend,
        state,
        workdelay
    })
    try{
        await maintainData.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(200).json({maintainData})
}
const GetMaintainData = async(req,res, next) => {
    let users;
    try{
    users = await repairData.find();
    }catch(err){
    return console.log(err)
    }
    if(!users){
    return res.status(400).json({message:"No Users Found."})
    }
    return res.status(200).json({users})
}
const DeleteMaintainData = async (req, res, next) => {
    const id = req.params.id;
    // console.log(user_ID)
    await repairData.findByIdAndDelete({_id:id})
    .then(() => {
    res.status(200).json({ message: "User data deleted succeffully"});
    console.log("data deleted succeffully");
    })
    .catch((er) => {
    res.status(400).json({ message: "user data not deleted" });
    console.log(er);
    });
}
const UserMaintainDataById = async (req, res, next) => {
    const id = req.params.id;
    await repairData.findById(id)
    .then((response) => {
        console.log(response)
    res.status(200).json({msg:"successfully fetched singledata",response});
    })
    .catch((error) => console.log(error));
}
const UpdateSingleMaintain = async (req, res, next) => {
    const _id = req.params.id;
    console.log(req.body);
    let user = await repairData.findByIdAndUpdate(_id, req.body);
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
exports.AddRepairData=AddRepairData;
exports.GetMaintainData=GetMaintainData;
exports.DeleteMaintainData = DeleteMaintainData;
exports.UserMaintainDataById =UserMaintainDataById ;
exports.UpdateSingleMaintain = UpdateSingleMaintain;