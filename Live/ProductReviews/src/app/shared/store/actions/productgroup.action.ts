import { createActionGroup, props } from "@ngrx/store";
import { ProductGroup } from "src/app/shared/entities";

export const productgroupActions = createActionGroup({
    source:'ProductGroup',
    events:{
        'Set':props<ProductGroup>()
    }
});