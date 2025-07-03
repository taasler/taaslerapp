// // src/candidates/components/JobSearch.js

// // Quick search on summary page
// // TAAS-25


import React, { useState } from "react";
import "../styles/JobSearch.css";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const workHoursOptions = ["Full-time", "Part-time", "Contract", "Freelance"];
const industries = ["Technology", "Finance", "Healthcare", "Education", "Retail"];
const skills = ["JavaScript", "Python", "React", "Node.js", "SQL", "Project Management", "Communication"];

const JobSearch = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [commencementDate, setCommencementDate] = useState(null);
  const [rate, setRate] = useState(50);

  return (
    <section className="job-search">
      <h2>Find Your Next Contract</h2>
      <div className="search-inputs">
        <input type="text" placeholder="Job title, Skill or Company" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Preferred Work Flexibility" />
        <button className="search-button">Find</button>
      </div>
      <button className="advanced-filters" onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "<<< Hide Filters" : "Advanced Filters >>>"}
      </button>

      {showFilters && (
        <div className="advancedfilters-container">
          {/* Row 1: Rate | Work Hours | Industry */}
          <div className="filter-item rate-filter">
            <label>Rate</label>
            <Slider min={10} max={200} value={rate} onChange={(e, value) => setRate(value)} valueLabelDisplay="auto" />
            <div className="rate-values">
              <span>10</span>
              <span className="selected-rate">{rate}</span>
              <span>200</span>
            </div>
          </div>

          <div className="filter-item">
            <label>Work Hours</label>
            <TextField select fullWidth>
              {workHoursOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="filter-item">
            <label>Industry</label>
            <Autocomplete options={industries} renderInput={(params) => <TextField {...params} label="Industry" />} />
          </div>

          {/* Row 2: Commencement Date */}
          <div className="filter-item">
            <label>Commencement Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={commencementDate} onChange={setCommencementDate} />
            </LocalizationProvider>
          </div>

          {/* Row 3: Hard Skill (full-width) */}
          <div className="filter-item hard-skill">
            <label>Hard Skill</label>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="Hard Skill" />} />
          </div>

          {/* Row 4: Soft Skill (full-width) */}
          <div className="filter-item soft-skill">
            <label>Soft Skill</label>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="Soft Skill" />} />
          </div>

          {/* Row 5: Keyword */}
          <div className="filter-item">
            <label>Keyword</label>
            <TextField fullWidth placeholder="Enter keywords..." />
          </div>

          {/* Row 6: Apply Filters Button (Centered)
          <div className="apply-filters">
            <Button variant="contained" color="primary">
              Apply Filters
            </Button>
          </div> */}
        </div>
      )}
    </section>
  );
};

export default JobSearch;
