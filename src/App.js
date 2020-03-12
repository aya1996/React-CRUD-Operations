import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
const Products = React.lazy(() => import('./pages/Products'));

const App = () => {
    return (
    <Suspense fallback={<div>Loading ...........</div>}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Products" component={Products} />
            </Switch>
        </BrowserRouter>
    </Suspense>
    );
};
export default App;