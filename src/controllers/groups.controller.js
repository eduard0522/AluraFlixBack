import Group from "../models/group.js"

export const getGroups = async (req,res) => {
  try {
    const videos = await  Group.find();
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    res.status(404).json({message: "An unexpected error ocurred." })
  }
}

export const createGroup = async (req,res) => {
  try {
    const gruop = new Group(req.body);
    const savedGroup = await gruop.save();
    if(!savedGroup) return res.status(500).json({ message :"An unexpected error ocurred" });
    return res.json({ message : "Group created successfully."})
  } catch (error) {
    return res.status(500).json({ message :"An unexpected error ocurred" });
  }
}

export const updateGroup = async (req,res) => {
  const {id} = req.params
  try {
    const group = await Group.findByIdAndUpdate(id, req.body , { new : true });

    if(!group) return res.status(404).json({ message : " group not found. "});
    return res.json({ message : "Group updated successfully."});

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message :"An unexpected error ocurred" });
  }
}

export const deleteGroup = async (req,res) => {
  const { id } = req.params;
  try {
    const group = await Group.findByIdAndDelete(id);
    if(!group) return res.status(404).json({ message : " group not found."});
    return res.json({ message : "Group deleted successfully."});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message :"An unexpected error ocurred" });
  }
}