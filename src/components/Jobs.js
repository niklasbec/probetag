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

    /*State*/

    const [checkedValues, setCheckedValues] = useState([])
    const [jobData, setJobData] = useState(data)
    const [searchValue, setSearchValue] = useState("")
    const [plzValue, setPlzValue] = useState("")
    const [existingCats, setExistingCats] = useState([])

    /*handles what happens when a checkbox is clicked*/

    const checkBoxChange = (checkedValues) => {
        setCheckedValues(checkedValues)
      };

    /*Extract Categories*/
    useEffect(() => {

        let existingCategories = []
        data.forEach(curr => {
            if(!existingCategories[curr.category]) {
                if(curr.category.split(" ").length > 1) {
                    let cats = curr.category.split(" ")
                    cats.forEach(curr => {
                        existingCategories.push(curr)
                    })
                } else {
                    existingCategories.push(curr.category)
                }
            }
        })
        setExistingCats(existingCategories)
        
        jobCategories.forEach(curr => {
            if(!existingCategories.includes(curr.value)) {
                curr.disabled = true
            }
        })
    }, [])

    useEffect(() => {
        let newJobData = []
        /*Filters for values*/
        data.forEach(curr => {
            if((curr.city.toLowerCase().includes(plzValue) || curr.plz.toLowerCase().includes(plzValue)) && (curr.title.toLowerCase().includes(searchValue) || curr.company.toLowerCase().includes(searchValue))) {
                newJobData.push(curr)
            }
        })

        /*This makes sure that categories get disabled and enabled whenever you enter or delete a search term*/
        if(searchValue.length !== 0 || plzValue.length !== 0) {
            jobCategories.forEach(curr => {
                curr.disabled = true
            })
        } else {
            jobCategories.forEach(curr => {
                if(existingCats.includes(curr.value)) {
                    curr.disabled = false
                }
            })
        }

        /*If there are not values checked show all listings*/
        if(checkedValues.length === 0) {
            setJobData(newJobData)
        } else {
            let jobDataChecked = []
           newJobData.forEach((curr) => {
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
            onChange={checkBoxChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
