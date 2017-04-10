import React, { PropTypes } from 'react';
import {
  Button,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { MainSidebar } from 'reactjs-admin-lte';

const propTypes = {
  children: PropTypes.node,
  onSearchTermChange: PropTypes.func,
  searchTerm: PropTypes.string,
};

const TableOfContentsRenderer = ({
  children,
  onSearchTermChange,
  searchTerm,
}) =>
  <MainSidebar>
    <div className="sidebar-form">
      <InputGroup>
        <FormControl
          onChange={event => onSearchTermChange(event.target.value)}
          placeholder="Filter by name"
          type="text"
          value={searchTerm}
        />
        <InputGroup.Button>
          <Button>
            <FontAwesome name="search" />
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </div>

    {children}
  </MainSidebar>;

TableOfContentsRenderer.propTypes = propTypes;

export default TableOfContentsRenderer;

