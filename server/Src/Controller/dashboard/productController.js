const formidable = require('formidable')
const cloudinary = require('cloudinary').v2
const ProductModel = require('../../models/productModel');
const { resposeReturn} = require('../../utils/response');
class productController {
    add_product = async (req, res) => {
        const { id } = req;
        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {


            let { name, category, description, stock, price, discount, shopName, brand } = fields;
            if (Array.isArray(name,category,description,stock,price,discount,shopName,brand)) {
                name = name[0];
                category = category[0];
                description = description[0];
                stock = stock[0];
                price = price[0];
                discount = discount[0];
                shopName = shopName[0];
                brand=brand[0]
        }
            const { images } = files;
            name = name.trim();
            category = category.trim();
            description = description.trim();
            stock = stock.trim();
            price = price.trim();
            discount = discount.trim();
            shopName = shopName.trim();
            brand = brand.trim();
            const slug = name.split(' ').join('-')

            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            })

            try {
                let allImageUrl = [];

                for (let i = 0; i < images.length; i++) {
                    const result = await cloudinary.uploader.upload(images[i].filepath, { folder: 'products' })
                    allImageUrl = [...allImageUrl, result.url]
                    console.log(result)
                }

                await ProductModel.create({
                    sellerId: id,
                    name,
                    slug,
                    shopName,
                    category,
                    description,
                    discount,
                    stock,
                    price,
                    images: allImageUrl,
                    brand

                })
                resposeReturn(res, 201, { message: "product add success" })
            } catch (error) {
                resposeReturn(res, 500, { error: error.message })
            }

        })
    }

    //Get product function

 products_get= async (req, res) => {
     const { page, searchValue, parPage } = req.query;
     const { id } = req;
    const  skipPage = parseInt(parPage) * (parseInt(page) - 1);
    try {
      if (searchValue) {
          const products = await ProductModel.find({
              $text: { $search: searchValue },
              sellerId: id
          }).skip(skipPage).limit(parPage).sort({ createdAt: -1 });
          
        const totalProducts = await ProductModel.find({
            $text: { $search: searchValue },
            sellerId:id
          })
          .countDocuments();
        resposeReturn(res, 200, { totalProducts, products });
      } else {
          const products = await ProductModel.find({ sellerId: id }).skip(skipPage).limit(parPage).sort({createdAt: -1})
          const totalProducts = await ProductModel.find({sellerId: id}).countDocuments();
          resposeReturn(res, 200, { totalProducts, products });
      } 
      
    } catch (error) {
      console.log(error.message);
    }
  };

    
}

module.exports = new productController()