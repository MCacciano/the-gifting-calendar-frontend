import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipients } from '../redux/recipient/actions';

class RecipientsIndexContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipients();
  }

  render() {
    const { loading, recipientIds, recipients } = this.props;

    if (loading) {
      return (
        <div>
          <iframe
            src='https://giphy.com/embed/QPQ3xlJhqR1BXl89RG'
            width='480'
            height='400'
            frameBorder='0'
            className='giphy-embed'
            alt='Stanley from The Office'
            allowFullScreen
          ></iframe>
          <p>
            <a href='https://giphy.com/gifs/QPQ3xlJhqR1BXl89RG'>via GIPHY</a>
          </p>
        </div>
      );
    }

    return (
      // Pass data to RecipientsList component
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          gap: '1rem 0',
        }}
      >
        {recipients.map(({ id, name }) => (
          <li
            key={id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              border: '1px solid black',
              width: 'max-content',
              padding: '.5rem',
            }}
          >
            <span style={{ marginRight: '1rem' }}>ID: {id}</span>
            Name: {name}
          </li>
        ))}
      </ul>
    );
  }
}

// const mapStateToProps = (state) => ({
//   recipientIds: state.recipient.recipientIds,
//   loading: state.recipient.loading,
// });

// * destructuring state so it doesn't get repeated because I'm extra
const mapStateToProps = ({ recipient }) => ({ ...recipient });

// * moving the 2nd connect argument into a variable also because I'm extra
const mapDispatchToProps = (dispatch) => ({
  fetchRecipients: () => dispatch(fetchRecipients()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipientsIndexContainer);
