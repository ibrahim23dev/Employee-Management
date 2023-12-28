const CustomerModel = require('../../models/customerModel')
const { resposeReturn } = require('../../utils/response')
const { CreateToken } = require('../../utils/CreateToken')
const SellerCustomerModel = require('../../models/chat/sellerCustomerModel')
const bcrypt = require('bcrypt')
class customerAuthController {
    customer_register = async (req, res) => {
        const { name, email, password } = req.body

        try {
            const customer = await CustomerModel.findOne({ email })
            if (customer) {
                resposeReturn(res, 404, { error: 'Email already exits' })
            } else {
                const createCustomer = await CustomerModel.create({
                    name: name.trim(),
                    email: email.trim(),
                    password: await bcrypt.hash(password, 10),
                    method: 'menualy'
                })
                await SellerCustomerModel.create({
                    myId: createCustomer.id
                })
                const token = await CreateToken({
                    id: createCustomer.id,
                    name: createCustomer.name,
                    email: createCustomer.email,
                    method: createCustomer.method
                })
                res.cookie('customerToken', token, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                })
                resposeReturn(res, 201, { message: 'Register success', token })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    customer_login = async (req, res) => {
        const { email, password } = req.body
        try {
            const customer = await CustomerModel.findOne({ email }).select('+password')
            if (customer) {
                const match = await bcrypt.compare(password, customer.password)
                if (match) {
                    const token = await CreateToken({
                        id: customer.id,
                        name: customer.name,
                        email: customer.email,
                        method: customer.method
                    })
                    res.cookie('customerToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    })
                    resposeReturn(res, 201, { message: 'Login success', token })
                } else {
                    resposeReturn(res, 404, { error: "Password wrong" })
                }
            } else {
                resposeReturn(res, 404, { error: 'Email not found' })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    customer_logout = async(req,res)=>{
        res.cookie('customerToken',"",{
            expires : new Date(Date.now())
        })
        resposeReturn(res,200,{message : 'Logout success'})
    }
}

module.exports = new customerAuthController()