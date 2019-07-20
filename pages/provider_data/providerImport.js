import React, { Component } from 'react';
import { createFilter } from './Filter';
import { createSorter } from './sort';

var data = require('./provider.json');

var test1 = {
  region: {
  property: 'Region',
  value: 'Central',
}
};


class ProviderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
      sorter: this.props.sorter
  };
}


  static defaultProps = {
    filters: [{
      property: 'Type',
      value: ''
    }, {
      property: test1.region.property,
      value: test1.region.value
    }, {
      property: 'County',
      value: ''
    }, {
      property: 'WCHR',
      value: ''
    }, {
      property: 'Stretcher',
      value: 'Yes'
    }],
    sorter: [{
      property: 'County'
    }, {
      property: 'name'
    }]
  };
  
  componentDidMount () {
    fetch(`/provider.json`)
      .then(res => res.json());
       
  }

  parseData(data) {
    const { sorter } = this.state;

    if (data && data.length) {
      if (Array.isArray(sorter) && sorter.length) {
        data.sort(createSorter(...sorter));
      }
    }

    return data;
  }

  render() {
    //const  data   = this.parseData(data);
    return this.parseData(data) ? this.renderData(data) : this.renderLoading();
  }

  renderData(data) {
    const { filters } = this.state;
    
    if (data && data.length > 0) {
      if (Array.isArray(filters) && filters.length) {
        data = data.filter(createFilter(...filters));
      }
      return (
        <div className="Provider-container">
          <div> 
              <table 
              
              className="Provider-table">
              <tr>
                <th>Type</th>
                <th>Provider Name</th>
                <th>Provider Region</th>
                <th>County</th>
                <th>Ambulatory</th>
                <th>Wheelchair</th>
                <th>Stretcher</th>
              </tr>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.Type}</td>
                  <td>{item.Name}</td>
                  <td>{item.Region}</td>
                  <td>{item.County}</td>
                  <td>{item.Amb}</td>
                  <td>{item.WCHR}</td>
                  <td>{item.Stretcher}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      );
    } else {
      return <div>No items found</div>;
    }
  }

  renderLoading() {
    return <div>Loading...</div>;
  }
}

export default ProviderList;


 /* codxe used while working on generating page
 render () {
    
     const  {sorter}  = this.state;
  
      if (data && data.length > 0) {
        if (Array.isArray(sorter) && sorter.length) {
          data.sort(createSorter(...sorter));
        }
      }
  
      return (
        
        <div>
                    
          {
            data.map(item => (
              <div key={item.id}>
                <span>{item.id}</span>&nbsp;&nbsp;
                
                <span><a href={`mailto:${item.email}`}>{item.name}</a></span>;&nbsp; 
                <span>{item.company}</span>
              </div>
            ))
          }
        </div>
        
      );
    } 
    }


export default List;*/



