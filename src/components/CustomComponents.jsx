import { TextField } from "@mui/material";

// every function are global

// i will now cause brain damage
export default function StyledInput({gulle, placeholder}){
    
    // sneak peak: you can apply useState() and useEffect() here :D

    return (
        <TextField variant={gulle} label={placeholder}/>
    )
}