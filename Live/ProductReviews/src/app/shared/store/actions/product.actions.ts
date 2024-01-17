import { createActionGroup, props } from "@ngrx/store";
import { Product } from "src/app/shared/entities";

export const productActions = createActionGroup({
    source:'Product',
    events:{
        'Set':props<Product>()
    }
});