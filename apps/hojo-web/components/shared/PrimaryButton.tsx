import { ReactNode } from "react"
import { Button, ButtonProps } from "@mui/material";

type PrimaryButtonType = {
    children: ReactNode,
    props?: ButtonProps
}

export default function PrimaryButton({ children, props }: PrimaryButtonType) {
    return (
        <Button variant="contained" fullWidth {...props} color="primary">
            {children}
        </Button>
    )
}