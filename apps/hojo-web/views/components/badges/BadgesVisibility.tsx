// ** React Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";
import { Fragment, useState } from "react";

import Avatar from "@mui/material/Avatar";
// ** MUI Imports
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

// Styled component for a wrapper
const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& > *": {
    marginRight: `${theme.spacing(6)} !important`,
  },
}));

const BadgesVisibility = () => {
  // ** States
  const [count, setCount] = useState<number>(1);
  const [invisible, setInvisible] = useState<boolean>(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Fragment>
      <Wrapper className="demo-space-x">
        <Badge badgeContent={count} color="primary">
          <Avatar src="/images/avatars/1.png" alt="User Avatar" />
        </Badge>
        <ButtonGroup size="small">
          <Button aria-label="reduce" onClick={() => setCount(Math.max(count - 1, 0))}>
            <Icon icon="mdi:minus" fontSize={20} />
          </Button>
          <Button aria-label="increase" onClick={() => setCount(count + 1)}>
            <Icon icon="mdi:plus" fontSize={20} />
          </Button>
        </ButtonGroup>
      </Wrapper>

      <Wrapper className="demo-space-x">
        <Badge variant="dot" color="primary" invisible={invisible}>
          <Avatar src="/images/avatars/1.png" alt="User Avatar" />
        </Badge>
        <FormControlLabel
          label="Show Badge"
          control={<Switch color="primary" checked={!invisible} onChange={handleBadgeVisibility} />}
        />
      </Wrapper>
    </Fragment>
  );
};

export default BadgesVisibility;
