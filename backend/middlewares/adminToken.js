
export const adminToken = (req,res,next)=>{
    const { rol } = req.user
    try {
        if (rol != 'admin') res.status(403).json({ message: "No autorizado" });
        next()
    } catch (error) {
        return res.status(500).json({message: "Error interno servidor"})
    }
    
}