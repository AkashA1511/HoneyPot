import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  // State to track if risk occurred
  const [riskOccured, setRiskOccured] = useState(false);

  const getCurrentTab = async () => {
    let queryOptions = { active: true,lastFocusedWindow: true};
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  const handleRisk = async () => {
    setRiskOccured(true);
    const tab = await getCurrentTab();
    const response = await chrome.tabs.sendMessage(tab.id!, 'This is not afftected by honey pot ');
    console.log(response);
  };


  return (
    <div className="App">
      <header className="App-header">
        
          <h1>HoneyPot Extension </h1>
        <button onClick={handleRisk}>Trigger Risk</button>
        {riskOccured && (
          <div className="popup">
            <p>HoneyPotted Site </p>
            
          </div>
        )}
      </header>
    </div>
  );
};

export default Popup;


// import React, { useState } from 'react';
// import './Popup.css';

// const Popup = () => {
//   // State to track if risk occurred
//   const [riskOccured, setRiskOccured] = useState(false);
//   // State to store the user's address
//   const [address, setAddress] = useState('');

//   const getCurrentTab = async () => {
//     let queryOptions = { active: true};
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
//   }

//   const handleRisk = async () => {
//     setRiskOccured(true);
//     const tab = await getCurrentTab();
//     const response = await chrome.tabs.sendMessage(tab.id!, 'This is not affected by honey pot ');
//     console.log(response);
//   };

//   // Handler function to update address state
//   const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setAddress(event.target.value);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>HoneyPot Extension </h1>
//         {/* Input field for the address */}
//         <div>
//           <label htmlFor="address">Your Address:</label>
//           <input 
//             type="text" 
//             id="address" 
//             value={address} 
//             onChange={handleAddressChange} 
//             placeholder="Paste your address here" 
//           />
//         </div>
//         <button onClick={handleRisk}>Trigger Risk</button>
//         {riskOccured && (
//           <div className="popup">
//             <p>HoneyPotted Site </p>
//             {/* Display the user's address */}
//             <p>Your Address: {address}</p>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Popup;

