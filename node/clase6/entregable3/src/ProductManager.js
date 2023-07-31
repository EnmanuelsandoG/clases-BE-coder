import fs from "fs";

class ProductManager {
  constructor(path) {
    this.path = path ?? "./products.json";
    this.id = 0;
    this.products = [];
  }

  /**
   * Check if product file exists and read file
   * if file doesn't exist, JSON file is created writing it with the products array
   * if file exists, it's read and increments by one the new possible ID of each product depending on the length of the array
   */
  async checkProducts() {
    if (!fs.existsSync(this.path)) {
      await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    } else {
      const fileContent = await fs.promises.readFile(this.path, "utf-8");
      this.products = JSON.parse(fileContent);
      if (this.products.length > 0) {
        this.id = this.products[this.products.length - 1].id + 1;
      }
    }
  }

  /**
   * waits for the execution of checkProducts method
   * @returns the array of products in the file
   */

  async getProducts() {
    await this.checkProducts();
    const productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    return productsInfo;
  }

  /**
   * A variable is created with the object format to be created
   * first if validates if each key of the object is created
   * then the object is added to the array
   * @returns the updated array
   */

  async addProduct({ title, description, price, thumbnail, code, stock }) {
    await this.checkProducts();

    const product = {
      id: this.id++,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.error("All fields must be filled!⚠️");
      return; // a return is added to exit the execution in case fields are missing.
    }

    const productExists = this.products.some((p) => p.code === product.code);
    if (productExists) {
      console.error(`This product code ${product.code} already exists!🙁`);
      return; // a return is added to exit the execution in case the product was already added.
    }

    this.products.push(product); // The new product is added to the array.

    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, "\t")
    );

    return this.products;
  }

  /**
   * @param {product id one wants to look for} productID
   * @returns a product if it's found or an empty object if it's not found
   */

  async getProductById(productID) {
    await this.checkProducts();
    const productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    const product = productsInfo.find((product) => product.id === productID);
    return product ? product : {};
  }

  /**
   * Update existing product in the array
   * @param {*} productID
   * @param {*} fieldUpdate
   */
  async updateProduct(productID, fieldUpdate) {
    this.checkProducts();
    const productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    let fieldValue = productsInfo.find((product) => product.id === productID);
    fieldValue.title = fieldUpdate.title ? fieldUpdate.title : fieldValue.title;
    fieldValue.description = fieldUpdate.description
      ? fieldUpdate.description
      : fieldValue.description;
    fieldValue.price = fieldUpdate.price ? fieldUpdate.price : fieldValue.price;
    fieldValue.thumbnail = fieldUpdate.thumbnail
      ? fieldUpdate.thumbnail
      : fieldValue.thumbnail;
    fieldValue.code = fieldUpdate.code ? fieldUpdate.code : fieldValue.code;
    fieldValue.stock = fieldUpdate.stock ? fieldUpdate.stock : fieldValue.stock;
    await fs.promises.writeFile(this.path, JSON.stringify(productsInfo));
  }

  /**
   * deletes a product by the ID
   * @param {*} productID
   */

  async deleteProduct(productID) {
    this.checkProducts();
    let productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    productsInfo = productsInfo.filter((product) => product.id !== productID);
    if (productsInfo) {
      await fs.promises.writeFile(this.path, JSON.stringify(productsInfo));
    } else {
      return;
    }
  }
}

//New execution of the instance
const pm = new ProductManager("./products.json");

//Products
const products = [
  {
    title: "Fender Stratocaster",
    description: "Guitarra electrica marca Fender",
    price: 800000,
    thumbnail: "Whatever",
    code: 3456789,
    stock: 10,
  },
  {
    title: "Gibson Les paul",
    description: "Guitarra electrica marca gibson",
    price: 1200000,
    thumbnail: "Whatever",
    code: 1234567,
    stock: 5,
  },
  {
    title: "Fender telecaster",
    description: "Guitarra electrica marca Fender",
    price: 780000,
    thumbnail: "Whatever",
    code: 7654321,
    stock: 2,
  },
  {
    title: "Gibson SG",
    description: "Guitarra electrica marca gibson",
    price: 1100000,
    thumbnail: "Whatever",
    code: 6754326,
    stock: 8,
  },
  {
    title: "Fender Jazzbass",
    description: "Bajo electrico marca Fender",
    price: 800000,
    thumbnail: "Whatever",
    code: 9283678,
    stock: 10,
  },
  {
    title: "Sterling bass",
    description: "Bajo electrico marca sterling",
    price: 450000,
    thumbnail: "Whatever",
    code: 7835623,
    stock: 9,
  },
  {
    title: "Ibanez bass",
    description: "Bajo electrico marca Ibanez",
    price: 230000,
    thumbnail: "Whatever",
    code: 9087356,
    stock: 7,
  },
  {
    title: "Metallica - Master of puppets",
    description: "Vinilo",
    price: 45000,
    thumbnail: "Whatever",
    code: 8653290,
    stock: 5,
  },
  {
    title: "Iron Maiden - The number of the Beast",
    description: "Vinilo",
    price: 38000,
    thumbnail: "Whatever",
    code: 5632916,
    stock: 3,
  },
  {
    title: "Tom Misch - Geography",
    description: "Vinilo",
    price: 42000,
    thumbnail: "Whatever",
    code: 1672456,
    stock: 6,
  },
];

const app = async function () {
  try {
    // await pm.addProduct(products[0]);
    // const prodsInfo = await pm.getProducts();
    // console.log(prodsInfo);
    // const prodInfo = await pm.getProductById(4);
    // console.log(prodInfo);
    // await pm.updateProduct(3, { title: "Fender new Stratocaster" });
    // await pm.deleteProduct(0);

    console.log("Ejecucion de APP satisfactoria!");
  } catch (error) {
    console.log(error);
  }
};

// app();

// module.exports = ProductManager;
export default ProductManager;
