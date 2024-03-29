import React from 'react';

import PropTypes from 'prop-types';

import {BaseContainer, ButtonsContainer, Form, Header,} from '../../../elements/FormStyles';

const DeleteConfirmationForm = ({onClose, handleDelete}) => {
    return (
        <>
            <BaseContainer>
                <Form onSubmit={handleDelete}>
                    <Header>Are You Sure?</Header>
                    <p>
                        This Action Will Permanently Delete The Portfolio
                    </p>
                    <ButtonsContainer>
                        <button
                            type="button"
                            style={{backgroundColor: 'red'}}
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </ButtonsContainer>
                </Form>
            </BaseContainer>
        </>
    );
};

DeleteConfirmationForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
export default DeleteConfirmationForm;
