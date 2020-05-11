import React from 'react';

import PropTypes from 'prop-types';

import {
  BaseContainer,
  ButtonsContainer,
  Form,
  Header,
} from '../../../elements/FormStyles';

const DeleteConfirmationForm = (props) => {
  const { onClose, handleDelete } = props;
  return (
    <>
      <BaseContainer>
        <Form onSubmit={handleDelete}>
          <Header style={{ color: 'black ' }}>Are You Sure?</Header>
          <p style={{ color: 'red' }}>
            {' '}
            This Action Will Permenently Delete The Portfolio
          </p>
          <ButtonsContainer>
            <button
              type="button"
              style={{ backgroundColor: 'red' }}
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
  // eslint-disable-next-line react/no-unused-prop-types
  onClose: PropTypes.func.isRequired,
};
export default DeleteConfirmationForm;
