import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {FrameworkTags, LanguageTags, ToolsTags} from "../../../../constants/SkillAndProjectTags";
import {ProjectStatus} from "../../../../constants/Projects";

const Filter = () => {
    return (
        <Stack direction={"row"} spacing={1} maxWidth={"1000px"}>
            <Stack spacing={1.618} width={"50%"}>
                <Autocomplete
                    fullWidth={true}
                    multiple
                    id="tags-outlined"
                    options={Object.values(LanguageTags)}
                    getOptionLabel={(option) => (option)}
                    defaultValue={[...Object.values(LanguageTags)]}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Languages Used"
                        />
                    )}
                />
                <Autocomplete
                    fullWidth={true}
                    multiple
                    id="tags-outlined1"
                    options={Object.values(ToolsTags)}
                    getOptionLabel={(option) => (option)}
                    defaultValue={[...Object.values(ToolsTags)]}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Tools Used"
                        />
                    )}
                />
            </Stack>
            <Stack spacing={1.618} width={"50%"}>
                <Autocomplete
                    fullWidth={true}
                    multiple
                    id="tags-outlined"
                    options={Object.values(FrameworkTags)}
                    getOptionLabel={(option) => (option)}
                    defaultValue={[...Object.values(FrameworkTags)]}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Frameworks Used"
                        />
                    )}
                />
                <Autocomplete
                    fullWidth={true}
                    multiple
                    id="tags-outlined1"
                    options={Object.values(ProjectStatus)}
                    getOptionLabel={(option) => (option)}
                    defaultValue={[...Object.values(ProjectStatus)]}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Project Status"
                        />
                    )}
                />
            </Stack>
        </Stack>
    );
}
export default Filter
