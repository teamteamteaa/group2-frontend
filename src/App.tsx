import React, { useState } from 'react';
import './App.css';
// Types
import { Member } from './API';

// Routing
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Notfound from './components/Notfound';
import SingleProject from './components/Project/SingleProject';
import CreateProject from './components/CreateProject';
import SingleTask from './components/Task/SingleTask';

const memberlist = [
    { name: "Too", role: "Project Manager" },
    { name: "Earthi", role: "UX/UI designer" },
    { name: "Kaoklong", role: "Frontend Developer" },
    { name: "Pae", role: "Fontend Developer" },
    { name: "team", role: "Backend Developer" },
]

const App: React.FC = () => {
    const [projectId, setProjectId] = useState('');
    const [taskId, setTaskId] = useState('');
    console.log(projectId);
    console.log(taskId);
    // project id will be set when the user clicks on a project
    // in the project list

    // SingleProduct will probably take in the project id
    // then make an api call to get the project, then render it

    return (
        <Router>
            <Switch>
                <Route exact path="/create-project">
                    <CreateProject members={memberlist as Member[]} />
                </Route>
                <Route exact path="/">
                    <Home setProjectId={setProjectId} />
                </Route>
                <Route exact path={`/${projectId}`}>
                    <SingleProject projectId={projectId} setTaskId={setTaskId} />
                </Route>
                <Route exact path={`/${projectId}/${taskId}`}>
                    <SingleTask projectId={projectId} />
                </Route>
                <Route exact path="/*">
                    <Notfound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
