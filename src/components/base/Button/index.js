import Button from '@mui/material/Button'

function MuiButton (props) {
  return (
    <Button
      variant={ props.variant }
      onClick={ props.onClick }
    >
      { props.children }
    </Button>
  )
}

export default MuiButton
