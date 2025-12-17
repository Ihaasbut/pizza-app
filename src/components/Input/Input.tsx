import styles from "./Input.module.css";
import cn from "classnames";
import { forwardRef } from "react";
import type { InputProps } from "./Input.props";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { className, isValid = true, ...props } ,
    ref
) {
    return (
        <input
            {...props}
            ref={ref}
            className={cn(styles["input"], className, {
                [styles["invalid"]]: !isValid,
            })}
        />
    );
});
export default Input;
