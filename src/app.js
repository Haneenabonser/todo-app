import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProvider from './context/ListContext';
import SettingsProvider from './context/Context';
import ToDo from './components/todo';

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsProvider>
          <ListProvider>
            <ToDo />
          </ListProvider>
        </SettingsProvider>
      </>
    );
  }
}