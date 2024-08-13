import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels({
  width,
  title,
  data,
  id,
  setValue,
  style,
}) {
  const [name, setName] = React.useState(title);

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
    setValue(value);
  };

  return (
    // <div className="z-50">
      <FormControl sx={{ minWidth: { width } }}>
        <Select
          style={style}
          id={id}
          value={name}
          onChange={handleChange}
          displayEmpty
          renderValue={(name) => (name ? name.name : "")}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    // </div>
  );
}
