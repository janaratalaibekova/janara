import React from 'react';

const Header = () => {
    return (
        <header className="header">
         <a href="" className='header-brand'>
            <img src="https://marketplace.canva.com/EAFA3ZobEQ4/1/0/1600w/canva-%D1%8D%D0%BB%D0%B5%D0%B3%D0%B0%D0%BD%D1%82%D0%BD%D1%8B%D0%B9-%D0%B6%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-qk7GsOzCOOw.jpg" alt="" />
         </a>
          <div className='buttons'>
            <button>Login </button>
            <button>authorization</button>
          </div>
      </header>
    );
};

export default Header;