import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModalAction } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClickNewEvent = () => {
        dispatch(uiOpenModalAction());
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNewEvent}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
