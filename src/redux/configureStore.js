import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createForm, createForms} from 'react-redux-form';
import logger from 'redux-logger'
import {Campsites} from './campsites';
import {Promotions} from './promotions';
import {Partners} from './partners';
import {Comments} from './comments';
import {InitialFeedback} from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            campsites: Campsites,
            promotions: Promotions,
            partners: Partners,
            comments: Comments,
            ...createForms ({
                feedbackForm: InitialFeedback 
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
};