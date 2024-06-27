

export const infoUser = async (req,res,next) =>{
    const { rol } = req.user
    console.log(req.user);
    next()
}