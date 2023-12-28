const Adminmodel = require('../models/adminModel');
const SellerModel = require('../models/sellerModel');
const Bcrypt = require('bcrypt');
const { resposeReturn } = require('../utils/response');
const {CreateToken} = require('../utils/CreateToken');
const formidable = require('formidable');
const cloudinary = require('cloudinary');

class AuthController {
     adminlogin= async(req, res)=> {
        try {
            const { email, password } = req.body;
            const admin = await Adminmodel.findOne({ email }).select('+password');
            if (!admin) {
                return resposeReturn(res, 404, { error: "Email Not Found" });
            }
            
            const match = await Bcrypt.compare(password, admin.password);
            if (!match) {
                return resposeReturn(res, 404, { error: "Password is Invalid" });
            }

            const token = await CreateToken({
                id: admin.id,
                role: admin.role
            });

            res.cookie('accessToken', token, {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });

           resposeReturn(res, 200, { token, message: "Login Successful" });
        } catch (error) {
            resposeReturn(res, 500, { error: error.message });
        }
    }

    seller_login = async (req, res) => {
        const { email, password } = req.body
        try {
            const seller = await SellerModel.findOne({ email }).select('+password')
            if (seller) {
                const match = await Bcrypt.compare(password, seller.password)
                if (match) {
                    const token = await CreateToken({
                        id: seller.id,
                        role: seller.role
                    })
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    })
                   resposeReturn(res, 200, { token, message: 'Login success' })
                } else {
                   resposeReturn(res, 404, { error: "Password wrong" })
                }
            } else {
                resposeReturn(res, 404, { error: "Email not found" })
            }
        } catch (error) {
            resposeReturn(res, 500, { error: error.message })
        }
    }

    seller_register = async (req, res) => {
        const { email, name, password } = req.body
        try {
            const getUser = await SellerModel.findOne({ email })
            if (getUser) {
                resposeReturn(res, 404, {error: 'email already exit'})
            }
            else {
                const seller = await SellerModel.create({
                    name,
                    email,
                    password: await Bcrypt.hash(password, 10),
                    method: 'menualy',
                    shopInfo:{}
                })
                console.log(seller)
            }
        } catch (error) {
            console.log(error)
            
        }
    }

     getUser= async(req, res)=> {
        try {
            const { role, id } = req;

            if (role === 'admin') {
                const user = await Adminmodel.findById(id);
                resposeReturn(res, 200, { userInfo: user });
            } else {
                console.log('Seller Find');
            }
        } catch (error) {
            console.log(error.message);
        }
    }
   
    profile_image_upload = async (req, res) => {
        const { id } = req
        const form =new formidable.IncomingForm();
        form.parse(req, async (err, _, files) => {
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            })
            const { image } = files
            try {
                const result = await cloudinary.uploader.upload(image[0].filepath, { folder: 'profile' })
                if (result) {
                    await SellerModel.findByIdAndUpdate(id, {
                        image: result.url
                    })
                    const userInfo = await SellerModel.findById(id)
                    resposeReturn(res, 201, { message: 'image upload success', userInfo })
                } else {
                   resposeReturn(res, 404, { error: 'image upload failed' })
                }
            } catch (error) {
                //console.log(error)
                resposeReturn(res, 500, { error: error.message })
            }
        })
    }

    profile_info_add = async (req, res) => {
        const { division, district, shopName, sub_district } = req.body;
        const { id } = req;

        try {
            await SellerModel.findByIdAndUpdate(id, {
                shopInfo: {
                    shopName,
                    division,
                    district,
                    sub_district
                }
            })
            const userInfo = await SellerModel.findById(id)
            resposeReturn(res, 201, { message: 'Profile info add success', userInfo })
        } catch (error) {
            resposeReturn(res, 500, { error: error.message })
        }
    }

    logout = async (req, res) => {
        try {
            res.cookie('accessToken',null,{
                expires : new Date(Date.now()),
                httpOnly : true
            })
            resposeReturn(res,200,{message : 'logout success'})
        } catch (error) {
            resposeReturn(res, 500, { error: error.message })
        }
    }
}

module.exports = new AuthController();
