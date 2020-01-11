import React from "react";
// import axios from 'axios';
import PortfolioNews from "./PortfolioNews.jsx";
class PortfolioNewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [
        {
          title:
            "Another US visa holder was denied entry over someone else’s messages",
          news_url:
            "https://techcrunch.com/2019/09/02/denied-entry-united-states-whatsapp/",
          image_url: "https://cdn.snapi.dev/images/v1/f/a/oil39.jpg",
          text:
            "It has been one week since U.S. border officials d…shman just days before classes were set to begin.",
          sentiment: "Neutral",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title: "How Do Ralph Lauren's Revenues In Asia Compare With Peers?",
          news_url:
            "https://www.forbes.com/sites/greatspeculations/201…alph-laurens-revenues-in-asia-compare-with-peers/",
          image_url: "https://cdn.snapi.dev/images/v1/3/3/rlp23.jpg",
          text:
            "Global apparel retailers have seen revenues and pr… Ralph Lauren has also benefited from this trend.",
          sentiment: "Neutral",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title: "3 Stock Ideas from The Ultimate Stock-Pickers",
          news_url: "https://www.youtube.com/watch?v=n2vX5Xr3CrQ",
          image_url: "https://cdn.snapi.dev/images/v1/r/a/stores-grocery8.jpg",
          text:
            "Managers were attracted to industrials, energy, and technology stocks.",
          sentiment: "Positive",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title:
            "CrowdStrike: How To Get Long This Hyper-Growth Name With Little Risk, Part 1 (The Company)",
          news_url:
            "https://seekingalpha.com/article/4289168-crowdstri…long-hyper-growth-name-little-risk-part-1-company",
          image_url:
            "https://cdn.snapi.dev/images/v1/d/w/cyber-security-3400657-1920-2.jpg",
          text:
            "CrowdStrike is a hyper-growth stock with strong upside momentum.",
          sentiment: "Positive",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title:
            "Wabash National: An Undervalued Company With Attractive Prospects",
          news_url:
            "https://seekingalpha.com/article/4289165-wabash-national-undervalued-company-attractive-prospects",
          image_url: "https://cdn.snapi.dev/images/v1/w/b/wbw23-1.jpg",
          text:
            "Wabash National strong quarterly earnings with GAAP earnings per share of $0.56.",
          sentiment: "Positive",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title: "Now Facebook says it may remove Like counts",
          news_url: "https://techcrunch.com/2019/09/02/facebook-hidden-likes/",
          image_url:
            "https://cdn.snapi.dev/images/v1/e/1/gettyimages-1146342188.jpg",
          text:
            "Facebook could soon start hiding the Like counter …ends who’ve Liked it instead of the total number.",
          sentiment: "Neutral",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title: "Equinor to See Johan Sverdrup Oil Production Before Time",
          news_url:
            "http://www.zacks.com/stock/news/498190/equinor-to-see-johan-sverdrup-oil-production-before-time",
          image_url: "https://cdn.snapi.dev/images/v1/f/a/oil39.jpg",
          text:
            "The giant Equinor (EQNR)-operated oil field's day-…its peak output is expected to surge 660,000 bpd.",
          sentiment: "Neutral",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title:
            "Analysts Estimate Limoneira (LMNR) to Report a Decline in Earnings: What to Look Out for",
          news_url:
            "http://www.zacks.com/stock/news/498096/analysts-es…report-a-decline-in-earnings-what-to-look-out-for",
          image_url: "https://cdn.snapi.dev/images/v1/o/0/food3.jpg",
          text:
            "Limoneira (LMNR) doesn't possess the right combina…g report. Get prepared with the key expectations.",
          sentiment: "Negative",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title:
            "Analysts Estimate Applied Genetic Technologies (AG…eport a Decline in Earnings: What to Look Out for",
          news_url:
            "http://www.zacks.com/stock/news/498101/analysts-es…report-a-decline-in-earnings-what-to-look-out-for",
          image_url: "https://cdn.snapi.dev/images/v1/j/l/biotech40.jpg",
          text:
            "Applied Genetic Technologies (AGTC) doesn't posses…g report. Get prepared with the key expectations.",
          sentiment: "Negative",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title:
            "Analysts Estimate Lakeland Industries (LAKE) to Report a Decline in Earnings: What to Look Out for",
          news_url:
            "http://www.zacks.com/stock/news/498102/analysts-es…report-a-decline-in-earnings-what-to-look-out-for",
          image_url: "https://cdn.snapi.dev/images/v1/f/j/medical22.jpg",
          text:
            "Lakeland Industries (LAKE) doesn't possess the rig…g report. Get prepared with the key expectations.",
          sentiment: "Negative",
          tickers: ["a", "aaa", "bbb"]
        },
        {
          title:
            "Casey's General Stores (CASY) to Report Q1 Results: Wall Street Expects Earnings Growth",
          news_url:
            "http://www.zacks.com/stock/news/498103/caseys-gene…rt-q1-results-wall-street-expects-earnings-growth",
          image_url: "https://cdn.snapi.dev/images/v1/r/a/stores-grocery8.jpg",
          text:
            "Casey's (CASY) doesn't possess the right combinati…g report. Get prepared with the key expectations.",
          sentiment: "Positive",
          tickers: ["a", "aaa", "bbb"]
        }
      ]
    };
  }

  // componentDidMount() {
  //   axios.get(`https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&token=dy42ytdgn1026x7x9wwjamxwiyazqg6xbkdvxmpu`)
  //   .then(response => {
  //     this.setState({news: response.data });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  render() {
    return <PortfolioNews news={this.state.news} />;
  }
}
export default PortfolioNewsContainer;
