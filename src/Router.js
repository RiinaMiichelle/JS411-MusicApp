import React from 'react'
    import { Switch, Route } from 'react-router'
    import Home from './Home'
    import Dashboard from './components/Dashboard'

    const Router = () => {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dash" component={Dashboard} />
            </Switch>
        )
    }

    export default Router;