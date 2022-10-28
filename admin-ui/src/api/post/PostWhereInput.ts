import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  content?: StringFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
