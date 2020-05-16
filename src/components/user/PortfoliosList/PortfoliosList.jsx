import React, { useState } from 'react';

import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';

import { PORTFOLIOS } from '../../../constants/routes';
import DeleteButton from '../../../elements/DeleteButton';
import Table from '../../../elements/TableStyles';
import Theme from '../../../elements/Theme';
import deleteForeverIcon from '../../../icons/deleteForeverIcon.svg';
import deleteForeverIconHover from '../../../icons/deleteForeverIconHover.svg';
import DeleteConfirmationForm from '../../common/DeleteConfirmationForm/DeleteConfirmationForm';
import Modal from '../../common/Modal/Modal';
import { Container, Header } from './portfoliosListStyles';


const PortfoliosList = (props) => {
  const { deletePortfolio, portfolios } = props;
  const { portfolios: portfoliosList } = portfolios;
  const [portfolioToDelete, setPortfolioToDelete] = useState(null);

  const handleDelete = () => {
    deletePortfolio(portfolioToDelete);
    setPortfolioToDelete(false);
  };

  return (
    <Container>
      <Header>RM:don`t leave your portfolios empty, add stocks now!</Header>
      {Object.keys(portfoliosList) && !!Object.keys(portfoliosList).length && (
        <Table>
          <thead>
            <tr>
              <th>Portfolio Name</th>
              <th>Symbols</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(portfoliosList).map((index) => (
              <tr key={index}>
                <td
                  style={{
                    cursor: 'hand',
                    fontSize: '1rem',
                    fontWeight: '600',
                  }}
                >
                  <Link
                    style={{ color: `${Theme.primaryColor}` }}
                    to={{
                      pathname: `${PORTFOLIOS}/${portfoliosList[index].name}`,
                      state: { index },
                    }}
                  >
                    {portfoliosList[index].name}
                  </Link>
                </td>
                <td>{portfoliosList[index].stocks.length}</td>
                <td>{portfoliosList[index].currency}</td>
                <td>
                  <DeleteButton
                    onClick={() => setPortfolioToDelete(portfoliosList[index].name)}
                  >
                    <img alt="Delete Symbol" className="regularIcon" src={deleteForeverIcon} />
                    <img alt="Delete Symbol" className="hoverIcon" src={deleteForeverIconHover} />
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {portfolioToDelete && (
        <Modal onClose={() => setPortfolioToDelete(false)}>
          <DeleteConfirmationForm
            handleDelete={handleDelete}
            loadingStatus={portfolios}
            onClose={() => setPortfolioToDelete(false)}
          />
        </Modal>
      )}
    </Container>
  );
};

PortfoliosList.propTypes = {
  deletePortfolio: PropTypes.func.isRequired,
  portfolios: PropTypes.objectOf(object).isRequired,
};


export default PortfoliosList;
