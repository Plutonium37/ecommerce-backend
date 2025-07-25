import { Request } from "express";
import { User,Product } from "@prisma/client";

export interface DecodedToken {
  uid: string;
  role: "admin" | "guest" | "user";
  isAdmin: boolean;
  iat?: number;
  exp?: number;
}

export interface UserExtend extends Request {
  user?: User;
}

export interface AuthRequest extends Request {
  user?: DecodedToken;
}
export interface ProductRequest extends Request {
  product?: Product;
}


export type GuestCartItem = {
  productId: string;
  stockname: string;
  quantity: number;
};

export interface UploadRequestBody {
  fileName: string;
  fileType: string;
}

export interface DeleteRequestBody {
  key: string;
}
