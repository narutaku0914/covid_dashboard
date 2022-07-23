import { ChangeEvent, FC } from "react";
import { styled } from "@mui/material/styles";
import { FormControl, NativeSelect } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";

const CustomFormControl = styled(FormControl)`
  marginbottom: theme.spacing(3);
  minwidth: 320;
`;

export const SwitchCountry: FC = () => {
  const dispatch = useDispatch();

  const countries = ["Japan", "China", "Us", "France"];
  return (
    <CustomFormControl>
      <NativeSelect
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </CustomFormControl>
  );
};
