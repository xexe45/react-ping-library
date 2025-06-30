import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProviderAuthorization, PingAuthorization } from '.././';

const handleOnChange = ({ code }: {code: string}) => {
    alert('Tu código de autorización es: ' + code);
  }

const App = () => {
  return (
     <ProviderAuthorization>
       <PingAuthorization onChange={handleOnChange} className="home-2 mt-2" />
    </ProviderAuthorization>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
