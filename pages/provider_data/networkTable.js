import React, { Component } from 'react'
import ReactTable from 'react-table'
import "react-table/react-table.css"

var networkdata = require('./network.json');

/*counts number of Region types there are in the json
const uniqueNames = new Set(data.map(item => item.Region)).size;
*/

//Function for case insensitivity allowing for more flexibility on filter results based
//on user input.
function filterCaseInsensitive(filter, row) {
  const id = filter.pivotId || filter.id;
  return (
    row[id] !== undefined ?
      String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
    :  true
  );
}

//creates dropdown list for each table column listing available selection options for 
//each json listing.  Example: Region - Central, Southwest, East
const customFilter = ({ fieldName, filter, onChange }) => {
  return (
    <select
      onChange={event => onChange(event.target.value)}
      style={{ width: "100%" }}
      value={filter ? filter.value : ''}> 
      <option value= ''>Show All</option>
      {networkdata.sort((a, b) => {
          const One = a[fieldName];
          const Two = b[fieldName];
      
          return (One < Two) ? -1 : (One > Two) ? 1 : 0;
      })
        .map(item => item[fieldName])
        .filter((item, i, s) => s.lastIndexOf(item) == i)
        .map(function (value) {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })
      }
    </select>
  );
};


class NetworkList extends Component {
  constructor(props) {
    super(props); 
  }
 
  render() {
    return networkdata ? this.renderData(networkdata) : this.renderLoading();
  }

  renderData(networkdata) {
    return (
      <div>
        <ReactTable 
          className= "Provider-table -striped -highlight center shadow-sm"
          data= {networkdata}
          defaultPageSize={20}
          style={{
            height: "800px"
          }}
          //sets filtering options in react-table for no dropdown option.  Calls the filtercaseinsensitive
          //function as mentioned above
          filterable defaultFilterMethod=
          {(filter, row) => filterCaseInsensitive(filter, row) }
          columns={[
            {
              Header: "Provider",
              columns: [
                {
                  Header: "Name",
                  id: "Name",
                  accessor: d => d.Name,
                  width: 140,
                  
                  //*sorting method to allow for listing of numerical order listed in the name
                  sortMethod: (a, b) => {
                    if (a.length === b.length) {
                      return a > b ? 1 : -1;
                    }
                    return a.length > b.length ? 1 : -1;
                  },
                },
                {
                  Header: "Address",
                  id: "Address",
                  accessor: d => d.Address,
                  width: 300,
                  size: 2,
                  style: {
                    whiteSpace: 'unset',
                    fontSize: '14px'
                  },
                },
                {
                  Header: "Phone",
                  id: "Phone",
                  accessor: d => d.Phone,
                  width: 150,
                },
                {
                  Header: "Email",
                  id: "Email",
                  accessor: d => d.Email,
                  width: 220,
                  style: {fontSize: '14px'},
                }
              ]
            },              
            {
              Header: "Provider Info",
              columns: [
                {
                  Header: "Region",
                  id: "Region",
                  width: 110,
                  style: {'textAlign': 'center'},
                  accessor: d => d.Region,
                  filterMethod: (filter, row) => {
                    return row[filter.id] === filter.value;
                  },
                  //calls the customfilter function above creating a dropdown list for
                  //filter
                  Filter: ({ filter, onChange }) =>
                  customFilter({ fieldName:'Region', filter, onChange })
                },
                {
                  Header: "County",
                  id: "County",
                  style: {'textAlign': 'center'},
                  width: 110,
                  accessor: d => d.County,
                  filterMethod: (filter, row) => {
                    return row[filter.id] === filter.value;
                  },
                  //calls the customfilter function above creating a dropdown list for
                  //filter
                  Filter: ({ filter, onChange }) =>
                  customFilter({ fieldName:'County', filter, onChange })
                }
              ]
            },
            {
              Header: "Level of Service",
              columns: [
                {
                  Header: "Ambulatory",
                  accessor: "Amb",
                  style: {'textAlign': 'center'},
                  width: 110,
                  filterMethod: (filter, row) => {
                    return row[filter.id] === filter.value;
                  },
                  //calls the customfilter function above creating a dropdown list for
                  //filter
                  Filter: ({ filter, onChange }) =>
                  customFilter({ fieldName:'Amb', filter, onChange })
                },
                {
                  Header: "Wheelchair",
                  id: "WCHR",
                  style: {'textAlign': 'center'},
                  width: 110,
                  accessor: d => d.WCHR,
                  filterMethod: (filter, row) => {
                    return row[filter.id] === filter.value;
                  },
                  //calls the customfilter function above creating a dropdown list for
                  //filter
                  Filter: ({ filter, onChange }) =>
                  customFilter({ fieldName:'WCHR', filter, onChange })
                },
                {
                  Header: "Stretcher",
                  id: "Stretcher",
                  style: {'textAlign': 'center'},
                  width: 110,
                  accessor: d => d.Stretcher,
                  filterMethod: (filter, row) => {
                    return row[filter.id] === filter.value;
                  },
                  //calls the customfilter function above creating a dropdown list for
                  //filter
                  Filter: ({ filter, onChange }) =>
                  customFilter({ fieldName:'Stretcher', filter, onChange })
                },
              ]
            },
          ]}
        > 
        {/*functions to display totals of filtered data. */}
        {(state, makeTable, instance) => {
          let recordsInfoText = "";
          const { filtered, pageRows, pageSize, sortedData, page } = state;

          if (sortedData && sortedData.length > 0) {
            let isFiltered = filtered.length > 0;
            let totalRecords = sortedData.length;
            let recordsCountFrom = page * pageSize + 1;
            let recordsCountTo = recordsCountFrom + pageRows.length - 1;

            if (isFiltered)
              recordsInfoText = `${totalRecords} filtered Providers`;
            else
              recordsInfoText = `${recordsCountFrom}-${recordsCountTo} of ${totalRecords} records`;
          } else recordsInfoText = "No records";

          return (
            <div className="main-grid">
                <div>
                  <span className="records-info h3">{recordsInfoText}</span>
                </div>
              {makeTable()}
            </div>
          );
        }}
      </ReactTable>
    </div>
    );
  } 
  renderLoading() {
    return <div>Loading...</div>;
  }
}

export default NetworkList;
