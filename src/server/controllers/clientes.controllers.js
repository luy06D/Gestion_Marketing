import ClientesService from "../service/cliente.service.js";
const service = new ClientesService();

//BUSCAR CLIENTES 
const filterClient = async (req, res) =>{
    try {
        const {search} = req.query;
        const response = await service.filterClient(search);
        res.json(response);
    } catch (err) {
        res.status(500).send({success: false, message: err.message});
        
    }
}


export default {filterClient}