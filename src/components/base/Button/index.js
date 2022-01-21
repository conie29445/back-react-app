
import Button from '@material-ui/core/Button';

export default function CButton (props) {
  return (
    <Button
      variant={ props.variant }
      onClick={ props.onClick }
    >
      { props.children }
    </Button>
  )
}
