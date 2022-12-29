import React, { useState } from 'react';
// Retain the data between renders.
// Trigger React to render the component with new data (re-rendering).
import Button, { SelectButton } from './Button.js';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal.js';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <h1>Path of: Least vs Most Resistance</h1>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
