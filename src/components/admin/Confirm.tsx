import React, { ReactEventHandler } from 'react'

interface Props {
  task: string;
  handleStateChange: ReactEventHandler;
  handleTask: ReactEventHandler;
}

const Confirm: React.FC<Props> = ({ 
  task, 
  handleStateChange, 
  handleTask 
}) => {
  return (
    <div>
      {task === 'delete' &&
        <h2>are you sure you want to delete this?</h2>
      }
      {task === 'update' &&
        <h2>are you sure you want to update this?</h2>
      }
      <button onClick={handleTask}>yes</button>
      <button onClick={handleStateChange}>no</button>
    </div>
  )
}

export default Confirm
