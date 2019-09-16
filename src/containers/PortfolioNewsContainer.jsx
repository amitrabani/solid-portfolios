
import React from 'react';
import axios from 'axios';
import PortfolioNews from '../components/PortfolioNews'
class PortfolioNewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []

}
  }

      componentDidMount() {
        axios.get(`https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&token=dy42ytdgn1026x7x9wwjamxwiyazqg6xbkdvxmpu`)
        .then(response => {
          this.setState({news: response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }

    render() {
      return <PortfolioNews news={this.state.news}/>; 
    }
  }
  export default PortfolioNewsContainer