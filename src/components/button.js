import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
  render() {
    const { className, children, onClick, disabled } = this.props;

    return (
      <div
        className={className}
        onClick={() => onClick && !disabled && onClick()}
      >
        {children}
      </div>
    );
  }
}

export default styled(Button)`
  outline: none;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
  width: ${props => props.width ? props.width : '100%'};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  background: ${props => props.background && !props.disabled ? props.background : 'grey'};
  
  ${props => props.padding ? `padding: ${props.padding};` : ''}
  
  ${props => props.outline ?
  `border: 2px solid ${props.background};
     background: transparent;
     color: ${props.background};
    `
  : ''}

  &:hover {
    filter: brightness(110%);
  }
`;