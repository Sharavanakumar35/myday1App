import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PriceCard = ({ title, price, features, isActive }) => (
    <div className="col-md-4">
      <div className="price-card" style={{ backgroundColor: 'white', color: 'black', padding: '20px', borderRadius: '10px', margin: '10px' }}>
        <div style={{borderBottom: '1px solid #f2f2f2'}}>
            <h2 style={{ textTransform: 'uppercase', color: 'grey', fontSize: 'medium', textAlign: 'center' }}>{title}</h2>
            <h3 className='text-center'>{price}</h3>
        </div>
        <div style={{ height: '15rem', overflowY: 'auto', margin: '1rem -1.5rem', scrollbarWidth: 'none' }}>
        <ul className='tick-list'>
          {features.map((feature, index) => (
            <li key={index}>
                {feature.active ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                <span className='m-2' style={{ fontSize: 'small', color: !feature.active ? 'grey' : 'black' }}>
                  {feature.name}
                </span>
            </li>
          ))}
        </ul>
        </div>
        <div className='text-center'>
          <button className="btn w-100 p-2" style={{borderRadius: '1rem', backgroundColor: isActive ? '#007aff' : '#4ba2ff', color: 'white', fontSize: 'small', fontWeight: 'bold'}}>BUTTON</button>
        </div>
      </div>
    </div>
  );

const CompA = () => {
  const priceCardsData = [
    {
      title: 'Free',
      price: '$0/month',
      features: [
        { name: 'Single User', active: true },
        { name: '50GB Storage', active: true },
        { name: 'Unlimited Public Projects', active: true },
        { name: 'Community Access', active: true },
        { name: 'Unlimited Private Projects', active: false },
        { name: 'Dedicated Phone Support', active: false },
        { name: 'Free Subdomain', active: false },
        { name: 'Monthly Status Reports', active: false }
      ],
      isActive: false,
    },
    {
      title: 'Plus',
      price: '$9/month',
      features: [
        { name: '5 Users', active: true },
        { name: '50GB Storage', active: true },
        { name: 'Unlimited Public Projects', active: true },
        { name: 'Community Access', active: true },
        { name: 'Unlimited Private Projects', active: true },
        { name: 'Dedicated Phone Support', active: true },
        { name: 'Free Subdomain', active: true },
        { name: 'Monthly Status Reports', active: false }
      ],
      isActive: false,
    },
    {
      title: 'Pro',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', active: true },
        { name: '50GB Storage', active: true },
        { name: 'Unlimited Public Projects', active: true },
        { name: 'Community Access', active: true },
        { name: 'Unlimited Private Projects', active: true },
        { name: 'Dedicated Phone Support', active: true },
        { name: 'Free Subdomain', active: true },
        { name: 'Monthly Status Reports', active: true }
      ],
      isActive: true,
    },
  ];
  

  return (
   
    <div className="container" style={{marginTop: '15rem'}}>
    <div className="row" style={{background: 'linear-gradient(to right, #0464e4, #31abfe)'}}>
      {priceCardsData.map((card, index) => (
        <PriceCard
          key={index}
          title={card.title}
          price={card.price}
          features={card.features}
          isActive={card.isActive}
        />
      ))}
    </div>
    </div>
  );
};

export default CompA;
