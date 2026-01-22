import styles from "./Headling.module.css";
import type { HeadlingProps } from "./Headling.props";
import cn from "classnames";

function Headling({ children, className, ...props }: HeadlingProps) {
    return (
        <h1 className={styles[cn(styles["h1"], className)]} {...props}>
            {children}
        </h1>
    );
}

export default Headling;
