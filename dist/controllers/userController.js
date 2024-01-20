import userModel from "../models/userModel.js";
const getAllUser = async (req, res) => {
    try {
        console.log("Controller");
        const users = await userModel.find();
        return res.status(200).json({ message: "Ok", users });
    }
    catch (error) {
        console.log("Controller");
        return res.status(400).json({ message: "Error!", cause: error.message });
    }
};
const getUser = async (req, res) => { };
export { getAllUser, getUser };
//# sourceMappingURL=userController.js.map