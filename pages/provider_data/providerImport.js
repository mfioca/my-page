import React, { Component } from 'react';
import { createFilter } from './Filter';
import { createSorter } from './sort';
import ReactTable from 'react-table';
import "react-table/react-table.css";

var data = require('./provider.json');


function filterCaseInsensitive(filter, row) {
  const id = filter.pivotId || filter.id;
  return (
      row[id] !== undefined ?
          String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
      :
          true
  );
}

class ProviderList extends Component {
  constructor(props) {
    super(props);
}
  
  componentDidMount () {
    fetch(`/provider.json`)
      .then(res => res.json());
  }

  render() {
    
    return data ? this.renderData(data) : this.renderLoading();
  }

  renderData(data) {
      return (
        <div>
          <ReactTable 
            className= "Provider-table -striped -highlight"
            data= {data}
            defaultPageSize={20}
            style={{
              height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
            }}
            filterable
            defaultFilterMethod={(filter, row) => filterCaseInsensitive(filter, row) }
            columns={[
              {
                Header: "Provider",
                columns: [
                  {
                    Header: "Name",
                    accessor: "Name",
                    sortMethod: (a, b) => {
                      if (a.length === b.length) {
                        return a > b ? 1 : -1;
                      }
                      return a.length > b.length ? 1 : -1;
                    }
                  }
                ]
              },              
              {
                Header: "Provider Info",
                columns: [
                  {
                    Header: "Type",
                    id: "Type",
                    accessor: d => d.Type
                  },
                  {
                    Header: "Region",
                    id: "Region",
                    accessor: d => d.Region
                  },
                  {
                    Header: "County",
                    id: "County",
                    accessor: d => d.County
                  }
                ]
              },
              {
                Header: "Level of Service",
                columns: [
                  {
                    Header: "Ambulatory",
                    accessor: "Amb"
                  },
                  {
                    Header: "Wheelchair",
                    id: "WCHR",
                    accessor: d => d.WCHR
                  },
                  {
                    Header: "Stretcher",
                    id: "Stretcher",
                    accessor: d => d.Stretcher
                  }
                ]
              },
            ]}
          /> 
        </div>
      );
    } 

  renderLoading() {
    return <div>Loading...</div>;
  }
}

export default ProviderList;


 



