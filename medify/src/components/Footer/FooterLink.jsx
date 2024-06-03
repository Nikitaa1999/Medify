import { Link, Stack } from "@mui/material";
import keyboardright from "../../assets/keyboard_arrow_right.svg";

export default function FooterLink({ children }) {
    return (
        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>
            <Stack direction='row' gap={0.5}>
               {keyboardright}
                {children}
            </Stack>
        </Link>
    )
}