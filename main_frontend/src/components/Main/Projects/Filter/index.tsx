import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {FrameworkTags, LanguageTags, ToolsTags} from "../../../../constants/SkillAndProjectTags";
import {ProjectStatus} from "../../../../constants/Projects";
import {Checkbox} from "@mui/material";

const Filter = () => {
    return (
        <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
            <Autocomplete
                className={"flex-grow-1"}
                multiple
                limitTags={1}
                id="languages-auto-complete"
                options={Object.values(LanguageTags)}
                defaultValue={[...Object.values(LanguageTags)]}
                // value={filter.showFields}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Languages Used"
                        placeholder={"Languages"}
                    />
                )}
                disableCloseOnSelect={true}
                // onChange={(e, value) => {
                //     setFilter(prev => ({...prev, showFields: value}))
                // }}
                style={{width: 300}}
            />
            <Autocomplete
                className={"flex-grow-1"}
                multiple
                limitTags={1}
                id="show-fields-auto-complete"
                options={Object.values(ToolsTags)}
                defaultValue={[...Object.values(ToolsTags)]}
                // value={filter.showFields}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Languages Used"
                        placeholder={"Languages"}
                    />
                )}
                disableCloseOnSelect={true}
                // onChange={(e, value) => {
                //     setFilter(prev => ({...prev, showFields: value}))
                // }}
                style={{width: 300}}
            />
            <Autocomplete
                className={"flex-grow-1"}
                multiple
                limitTags={1}
                id="show-fields-auto-complete"
                options={Object.values(LanguageTags)}
                defaultValue={[...Object.values(LanguageTags)]}
                // value={filter.showFields}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Languages Used"
                        placeholder={"Languages"}
                    />
                )}
                disableCloseOnSelect={true}
                // onChange={(e, value) => {
                //     setFilter(prev => ({...prev, showFields: value}))
                // }}
                style={{width: 300}}
            />
            <Autocomplete
                className={"flex-grow-1"}
                multiple
                limitTags={1}
                id="show-fields-auto-complete"
                options={Object.values(LanguageTags)}
                defaultValue={[...Object.values(LanguageTags)]}
                // value={filter.showFields}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Languages Used"
                        placeholder={"Languages"}
                    />
                )}
                disableCloseOnSelect={true}
                // onChange={(e, value) => {
                //     setFilter(prev => ({...prev, showFields: value}))
                // }}
                style={{width: 300}}
            />
                <Autocomplete
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
                    style={{minWidth: 300}}

                />
                <Autocomplete
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
                    style={{minWidth: 300}}

                />
                <Autocomplete
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
                    style={{minWidth: 300}}

                />
        </Stack>
    );
}
export default Filter
