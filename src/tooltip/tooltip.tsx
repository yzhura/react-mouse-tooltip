/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './tooltip.module.scss';

export interface ITooltipProps {
  content: ReactNode | string;
  children: ReactNode;
  transform?: string;
  className?: string;
  wrapperDivProps?: Record<string, any>;
}

const Tooltip = ({
  children,
  content,
  className = '',
  transform = `translate(0, 25px)`,
  wrapperDivProps,
  ...rest
}: ITooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const tooltipPortal = createPortal(
    <div
      className={`${styles.tooltip} ${className}`}
      ref={tooltipRef}
      {...rest}
    >
      {content}
    </div>,
    document.body,
  );

  const handleOnMouseEnter = () => {
    tooltipRef.current!.style.display = 'block';
  };

  const handleOnMouseLeave = () => {
    tooltipRef.current!.style.display = 'none';
  };

  const handleOnMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    tooltipRef.current!.style.left = `${event.pageX}px`;
    tooltipRef.current!.style.top = `${event.pageY}px`;
    tooltipRef.current!.style.transform = transform;
  };

  return (
    <div
      {...wrapperDivProps}
      onMouseMove={handleOnMouseMove}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {children}
      {tooltipPortal}
    </div>
  );
};

export default Tooltip;
