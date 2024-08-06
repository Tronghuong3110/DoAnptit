import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelect = ({ width, title, data, id, setValue, style }) => {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
    setValue(value);
  };

  return (
    <Box sx={{ minWidth: { width } }}>
      <FormControl fullWidth>
        <InputLabel id={id}>{title}</InputLabel>
        <Select
          labelId={title}
          id={id}
          value={name}
          label={title}
          onChange={handleChange}
          renderValue={(name) => (name ? name.name : "")}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MultipleSelect;
