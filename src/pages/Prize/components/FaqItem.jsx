import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import downIcon from '../img/down.svg';

const Wrapper = styled.div`
  padding: 40px 0px;
  border-bottom: 1px solid #656565;

  .qna-question {
    all: unset;
    cursor: pointer;
    margin: 0 10%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 25px;
      line-height: 40px;
      color: #ffffff;
    }

    img {
      display: block;
      height: 40px;
    }
  }

  .qna-answer {
    margin: 15px 10% 0 10%;
    max-width: 70%;

    p {
      font-size: 20px;
      line-height: 30px;
      color: #9f9f9f;
    }
  }

  .qna-active {
    transform: rotate(180deg);
  }
`;

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const imgClass = isOpen ? 'qna-active' : '';

  const handleFaq = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Wrapper>
      <button className="qna-question" onClick={handleFaq}>
        <p>{question}</p>

        <img src={downIcon} className={imgClass} alt="faq 드랍다운" />
      </button>
      {isOpen && <div className="qna-answer">{answer}</div>}
    </Wrapper>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
};

export default FaqItem;
