import { Product, ProductGroup } from "src/app/shared/entities";

export interface IMainState
{
    activeProductgroup:ProductGroup,
    activeProduct:Product
}