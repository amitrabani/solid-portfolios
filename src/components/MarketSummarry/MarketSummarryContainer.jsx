import React from "react";
import MarketSummarry from "./MarketSummarry.jsx";

const stocks = {
  bestMatches: [
    {
      "1. symbol": "BA",
      "2. name": "The Boeing Company",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": -1.0
    },
    {
      "1. symbol": "BSVN",
      "2. name": "Bank7 Corp.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.8
    },
    {
      "1. symbol": "BABA",
      "2. name": "Alibaba Group Holding Limited",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": -0.6667
    },
    {
      "1. symbol": "BAC",
      "2. name": "Bank of America Corporation",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.5714
    },
    {
      "1. symbol": "BIDU",
      "2. name": "Baidu Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": -0.4
    },
    {
      "1. symbol": "BAYRY",
      "2. name": "Bayer Aktiengesellschaft",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.3333
    },
    {
      "1. symbol": "GOLD",
      "2. name": "Barrick Gold Corporation",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": -3333
    },
    {
      "1. symbol": "BZUN",
      "2. name": "Baozun Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.3333
    },
    {
      "1. symbol": "BHC",
      "2. name": "Bausch Health Companies Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": -0.1538
    },
    {
      "1. symbol": "BA",
      "2. name": "The Boeing Company",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 1.0
    },
    {
      "1. symbol": "BSVN",
      "2. name": "Bank7 Corp.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": -0.8
    },
    {
      "1. symbol": "BABA",
      "2. name": "Alibaba Group Holding Limited",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.6667
    },
    {
      "1. symbol": "BAC",
      "2. name": "Bank of America Corporation",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": -0.5714
    },
    {
      "1. symbol": "BIDU",
      "2. name": "Baidu Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.4
    },
    {
      "1. symbol": "BAYRY",
      "2. name": "Bayer Aktiengesellschaft",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.3333
    },
    {
      "1. symbol": "GOLD",
      "2. name": "Barrick Gold Corporation",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.3333
    },
    {
      "1. symbol": "BZUN",
      "2. name": "Baozun Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.3333
    },
    {
      "1. symbol": "BHC",
      "2. name": "Bausch Health Companies Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": 0.1538
    }
  ]
};

const MarketSummarryContainer = () => {
  return <MarketSummarry stocks={stocks} />;
};
export default MarketSummarryContainer;
