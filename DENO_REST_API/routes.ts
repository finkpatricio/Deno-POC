import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

const router = new Router();

router.get("/api/products", getProducts);
router.get("/api/product/:id", getProduct);
router.post("/api/product", addProduct);
router.put("/api/product/:id", updateProduct);
router.delete("/api/product/:id", deleteProduct);

export default router;
