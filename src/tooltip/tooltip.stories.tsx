import Tooltip from './tooltip';
import './styles.scss';

export default {
  title: 'Tooltip',
};

export const TooltipExample = () => (
  <>
    <Tooltip content="Hello!">
      <h1>Hello Tooltip!</h1>
    </Tooltip>
    <hr />
    <br />
    <h2>Extended example:</h2>
    <Tooltip
      content={
        <div style={{ border: '1px solid green', padding: '10px' }}>
          Hello button :)
        </div>
      }
      transform="translate(-50%, 30px)"
      wrapperDivProps={{ className: 'inline-block' }}
    >
      <button>Hover on me</button>
    </Tooltip>
  </>
);
