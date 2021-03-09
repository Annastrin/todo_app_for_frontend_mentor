/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import {task, taskContent, checkmark, removeTaskBtn} from './Task-styles';
import {ReactComponent as IconCross} from './images/icon-cross.svg';

export function Task(props){
  const currentTask = useRef(null);

  const handleRemove = () => {
    props.onRemoveTask(currentTask.current.id);
  }

  const handleClick = () => {
    props.onToggleTaskState(currentTask.current.id, !props.completed);
  }

  return(
    <div css={task}>
      <input
        type="checkbox"
        checked={props.completed}
        id={props.taskId}
        name={name2KebabWithId(props.taskName, props.taskId)}
        ref={currentTask}
        onChange={handleClick}/>
      <label htmlFor={props.taskId} css={taskContent}>
        <span css={checkmark}></span>
        {props.taskName}
      </label>
      <button css={removeTaskBtn} onClick={handleRemove} data-testid={name2KebabWithId(props.taskName, props.taskId)}>
        <IconCross/>
        <span>Remove</span>
      </button>
    </div>
  )
}

export const name2KebabWithId = (name, id) => {
  return name.toLowerCase().split(' ').join('-') + '-' + id;
};

export default Task;