module.exports.resposeReturn=(res, code, data)=> {
    return res.status(code).json(data);
}
