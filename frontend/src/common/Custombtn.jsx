import { Button } from "@mui/material";

const Custombtn = ({variant, onclick, text, color}) => {
  return (
    <Button variant={variant} onclick={onclick} color={color}>{text}</Button>
  )
}

export default Custombtn
