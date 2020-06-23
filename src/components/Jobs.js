import React from "react";
import { Divider } from "antd";
import { Card } from 'antd';
import "antd/dist/antd.css";
import { Checkbox } from 'antd';
import { Input } from "antd";

/*Data import*/
import {data} from "../dummy-data/data"

const { Search } = Input;


const checkBoxChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
}

const jobCategories = [
    { label: 'Agrarhandel', value: 'Agrarhandel' },
    { label: 'Baustoffhandel', value: 'Baustoffhandel' },
    { label: 'Bauwesen', value: 'Bauwesen', disabled: false },
    { label: 'Einzelhandel/Raiffeisen', value: 'Einzelhandel/Raiffeisen' },
    { label: 'Energie', value: 'Energie' },
    { label: 'Futtermittel/Tierernährung', value: 'Futtermittel/Tierernährung', disabled: false },
    { label: 'IT', value: 'IT' },
    { label: 'Kaufmännisch/Administrativ', value: 'Kaufmännisch/Administrativ' },
    { label: 'Landtechnik', value: 'Landtechnik', disabled: false },
    { label: 'Logistik/Transport', value: 'Logistik/Transport', disabled: false },
    { label: 'Personal', value: 'Personal' },
    { label: 'Pflanzenbau', value: 'Pflanzenbau' },
    { label: 'Produktion', value: 'Produktion', disabled: false },
    { label: 'Vertrieb/Marketing', value: 'Vertrieb/Marketing', disabled: false },
  ];

function Jobs() {
  return (
    <div className="jobs">
      <h1 className="main-heading">Ihre Karriere bei AGRAVIS</h1>
      <div className="job-search">
        <div className="job-postings">
        {data.map((curr) => {
        return(
            <div className="job-listing-item">
                <Card title={curr.title}/>
            </div> 
            )
        })}
        </div>
        <div className="filter-pannel">
          <Search
            placeholder="input search text"
            onChange={(e) => console.log(e.target.value)}
            style={{ width: "80%" }}
            size="large"
          />
          <Divider />
          <Search
            placeholder="input search text"
            onChange={(e) => console.log(e.target.value)}
            style={{ width: "80%" }}
            size="large"
          />
          <Divider />
          <h3 className="category-heading">Kategorie</h3>
          <Checkbox.Group
      options={jobCategories}
        style={{"font-size": "20px"}}
      defaultValue={['Apple']}
      onChange={checkBoxChange}
    />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
