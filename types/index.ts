import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title : string;
    containerStyles? : string;
    handleClick? : MouseEventHandler<HTMLButtonElement>;
    btnType? : "button" | "submit";
}

// ==> ? is used for adding the property as optional