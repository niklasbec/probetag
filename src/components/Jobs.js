import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { Card } from "antd";
import "antd/dist/antd.css";
import { Checkbox } from "antd";
import { Input } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
/*Data import*/
import { data } from "../dummy-data/data";

const { Search } = Input;

const jobCategories = [
  { label: "Agrarhandel", value: "Agrarhandel", disabled: false },
  { label: "Baustoffhandel", value: "Baustoffhandel", disabled: false },
  { label: "Bauwesen", value: "Bauwesen", disabled: false },
  {
    label: "Einzelhandel/Raiffeisen",
    value: "Einzelhandel/Raiffeisen",
    disabled: false,
  },
  { label: "Energie", value: "Energie", disabled: false },
  {
    label: "Futtermittel/Tierernährung",
    value: "Futtermittel/Tierernährung",
    disabled: false,
  },
  { label: "IT", value: "IT", disabled: false },
  {
    label: "Kaufmännisch/Administrativ",
    value: "Kaufmännisch/Administrativ",
    disabled: false,
  },
  { label: "Landtechnik", value: "Landtechnik", disabled: false },
  { label: "Logistik/Transport", value: "Logistik/Transport", disabled: false },
  { label: "Personal", value: "Personal", disabled: false },
  { label: "Pflanzenbau", value: "Pflanzenbau", disabled: false },
  { label: "Produktion", value: "Produktion", disabled: false },
  { label: "Vertrieb/Marketing", value: "Vertrieb/Marketing", disabled: false },
];

function Jobs() {

    const [checkedValues, setCheckedValues] = useState([])
    const [jobData, setJobData] = useState(data)
    const [searchValue, setSearchValue] = useState("")
    const [plzValue, setPlzValue] = useState("")
    const checkBoxChange = (checkedValues) => {
        setCheckedValues(checkedValues)
      };

    /*Extract Categories*/
    useEffect(() => {

        let existingCategories = []
        data.forEach(curr => {
            if(!existingCategories[curr.category]) {
                existingCategories.push(curr.category)
            }
        })
        
        jobCategories.forEach(curr => {
            if(!existingCategories.includes(curr.value)) {
                curr.disabled = true
                console.log(existingCategories, curr.value);
            }
        })
    }, [])

    useEffect(() => {
        let newJobData = []
        data.forEach(curr => {
            if((curr.title.toLowerCase().includes(searchValue) && (curr.plz.toLowerCase().includes(plzValue) || curr.city.toLowerCase().includes(plzValue))) || (curr.company.toLowerCase().includes(searchValue) && curr.plz.includes(plzValue))) {
                newJobData.push(curr)
            }
        })

        if(checkedValues.length === 0) {
            setJobData(newJobData)
        } else {
            let jobDataChecked = []
           newJobData.forEach((curr, index) => {
               if(checkedValues.includes(curr.category)) {
                    jobDataChecked.push(curr)
               }
               setJobData(jobDataChecked)
           })
        }

    }, [searchValue, plzValue, checkedValues])

  return (
    <div className="jobs">
      <h1 className="main-heading">Ihre Karriere bei AGRAVIS</h1>
      <div className="job-search">
        <div className="job-postings">
          {jobData.map((curr, index) => {
            return (
              <div className="job-listing-item" key={index}>
                <Card title={curr.title}>
                  <p className="company-name">{curr.company}</p>
                  <div className="location-date">
                    <div className="location">
                    <EnvironmentOutlined className="icon"/>
                    {curr.city}
                    </div>
                    <div className="date">
                      <CalendarOutlined className="icon"/>
                      {curr.date}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="filter-pannel">
          <Search
            placeholder="Jobangebote durchsuchen"
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            style={{ width: "80%" }}
            size="large"
          />
          <Divider />
          <Search
            placeholder="PLZ / Ort suchen"
            onChange={(e) => setPlzValue(e.target.value.toLowerCase())}
            style={{ width: "80%" }}
            size="large"
          />
          <Divider />
          <h3 className="category-heading">Kategorie</h3>
          <Checkbox.Group
            options={jobCategories}
            style={{ "fontSize": 20 }}
            defaultValue={["Apple"]}
            onChange={checkBoxChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
