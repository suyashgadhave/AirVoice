import { useState } from 'react';
import axios from 'axios';
import OfferTable from './components/OfferTable';
import './styles.css';

export default function App() {
  const [offers, setOffers] = useState([]);

  const fetchOffers = async (category) => {
    const res = await axios.get(`http://localhost:4000/offers?category=${category}`);
    setOffers(res.data);
  };

  return (
    <div className="app">
      <h1>AirVoice Ltd</h1>
      <div className="options">
        <label>
          <input type="radio" name="cat" onChange={() => fetchOffers('prepaid')} /> Prepaid
        </label>
        <label>
          <input type="radio" name="cat" onChange={() => fetchOffers('postpaid')} /> Postpaid
        </label>
      </div>
      <OfferTable offers={offers} />
    </div>
  );
}
