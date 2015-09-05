import React from 'react';
import controller from './controller.js';
import { Container } from 'cerebral-react';
import UgcApp from '../containers/UgcApp';

React.render(<Container controller={controller}><UgcApp /></Container>, document.body);
