import {ReactNode} from "react";
import {Container} from "@mui/material";

export default function Main({children}: {children?: ReactNode}) {
    return <Container component="main" sx={{py: 3}}>
        {children}
    </Container>
}
