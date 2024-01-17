import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/shared/entities";
import { productActions } from "../actions/product.actions";

export const productReducer = createReducer(
    new Product(),
    on(productActions.set, (state, action)=>action)
    );