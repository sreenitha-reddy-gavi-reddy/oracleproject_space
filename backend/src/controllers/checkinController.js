const CheckinData=require('../../models/checkin');
 const AddCheckinData= async(req,res,next)=>{
    const{personname,organisation,mobile,visit,fromdate,todate,stay,place,reference,conformation,room,remarks,action}=req.body.formdata;
    const checkin=new CheckinData({
        personname,
        organisation,
        mobile,
        visit,
        fromdate,
        todate,
        stay,
        place,
        reference,
        conformation,
        room,
        remarks
    })
    try{
        await checkin.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(200).json({checkin})
 }
 const GetCheckinData = async(req,res, next) => { 
    let users; 
    try{ 
        users = await CheckinData.find({status:1}); 
    }catch(err){ 
        return console.log(err) 
    } 
    if(!users){ 
        return res.status(400).json({message:"No Users Found."}) 
    } 
    return res.status(201).json({users}) 
}

// const GetCheckoutData = async(req,res, next) => { 
//     let users; 
//     try{ 
//         users = await CheckinData.find({status:0}); 
//     }catch(err){ 
//         return console.log(err) 
//     } 
//     if(!users){ 
//         return res.status(400).json({message:"No Users Found."}) 
//     } 
//     return res.status(201).json({users}) 
// }


const UpdateCheckOutData = async (req, res, next) => {
    let id = req.params.id;
    try {
        // Assuming CheckinData is your Mongoose model
        // The update query should use _id instead of id if id is MongoDB's default ObjectId
        // Also, you should use findOneAndUpdate() to update a single document based on a query
        const user = await CheckinData.findOneAndUpdate(
            { _id: id }, // Assuming id is the MongoDB ObjectId of the document
            { $set: { status: 0 } },
            { new: true } // to return the updated document
        );
        res.status(200).json(user); // Send the updated user as response if needed
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};



exports.AddCheckinData=AddCheckinData;
exports.GetCheckinData = GetCheckinData;
exports.UpdateCheckOutData = UpdateCheckOutData;