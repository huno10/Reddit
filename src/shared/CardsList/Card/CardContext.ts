import { createContext } from "react";
import { IPostData } from "../../../hooks/usePostsData";

export const cardContext = createContext<IPostData>({} as IPostData)