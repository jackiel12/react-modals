import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { loadMarkets } from './actions/securityActions';

const initialSecurities = {
    "US02079K3059": {
        name: "GOOG",
        country: "USA",
        prices: {
            "01/02/19": 800,
            "01/03/19": 900,
            "01/04/19": 700,
            "01/05/19": 800,
            "01/06/19": 900,
            "01/07/19": 700,
            "01/08/19": 800,
            "01/09/19": 800,
            "01/10/19": 900,
            "01/11/19": 700,
            "01/12/19": 800,
        },
        ISIN: "US02079K3059",
        isOpen: false,
        pricesOpen: false,

    },
    "US90353T1007": {
        name: "UBER",
        country: "USA",
        prices: {
            "01/02/19": 800,
            "01/03/19": 900,
            "01/04/19": 700,
            "01/05/19": 800,
            "01/06/19": 900,
            "01/07/19": 700,
            "01/08/19": 800,
            "01/09/19": 800,
            "01/10/19": 900,
            "01/11/19": 700,
            "01/12/19": 800,
        },
        ISIN: "US90353T1007",
        isOpen: false,
        pricesOpen: false,

    },
    "US0378331005": {
        name: "APPL",
        country: "USA",
        prices: {
            "01/02/19": 800,
            "01/03/19": 900,
            "01/04/19": 700,
            "01/05/19": 800,
            "01/06/19": 900,
            "01/07/19": 700,
            "01/08/19": 800,
            "01/09/19": 800,
            "01/10/19": 900,
            "01/11/19": 700,
            "01/12/19": 800,
        },
        ISIN: "US0378331005",
        isOpen: false,
        pricesOpen: false,

    }
}

const initialTestState = {
    securities: initialSecurities,
    addIsOpen: false
}

const store = createStore(
  reducers,
  //this is the preloaded state
  {securities: initialTestState},
  composeWithDevTools(applyMiddleware(thunk)),
);

// store.dispatch(loadMarkets());

export default store;