import {useState} from "react";
import {Badge, Button} from "@mui/material";

export default function Counter() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <Badge color="secondary" badgeContent={count}>
            <Button variant="outlined" onClick={handleClick}>点我</Button>
        </Badge>
    )
}
