import productModel from "../models/productModel.js"
import imagekit from '../config/imagekit.js'


// Function to add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    //Upload images to imagekit
    const imagesUrl = await Promise.all(
      images.map(async (img) => {
        try {
          const response = await imagekit.upload({
            file:  `data:${img.mimetype};base64,${img.buffer.toString("base64")}`,
            fileName: img.originalname,
            folder: "/jersey"
          });

          //URL generation for images and videos
          const optimizedURL = imagekit.url({
            path: response.filePath,
            transformation: [
              { height: "390" },
              { width: "450" },
              { quality: "auto" },
              { format: "webp" }
            ]
          })

          return optimizedURL
        } catch (uploadedError) {
          console.error("Error uploading image to ImageKit:", uploadedError?.message || uploadedError);
          return undefined
        }
      })
    )
       
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller: bestSeller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for list product
const listProducts = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, products})
    } catch (error) {
        console.log(error);
        res.json({ success:false, message:error.message })
        
    }
}

//Function for removing product
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success:true,message:"Product Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//function for single product info
const singleProduct = async (req,res) => {
   try {

    const { productId } = req.body
    const product = await productModel.findById(productId)
    res.json({success:true,product})

   } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
   } 
}


export { listProducts, addProduct, removeProduct, singleProduct }