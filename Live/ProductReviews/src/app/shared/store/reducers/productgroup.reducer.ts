import { createReducer, on } from "@ngrx/store";
import { ProductGroup } from "src/app/shared/entities";
import { productgroupActions } from "../actions/productgroup.action";

export const productgroupReducer = createReducer(
    new ProductGroup(),
    on(productgroupActions.set, (state, action)=>action)
    );