import React, { useState } from 'react';
import { UncontrolledPopover, PopoverBody, PopoverHeader } from 'reactstrap';

const PopoverHint = props => {
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

	return (
		<UncontrolledPopover
			trigger="hover"
			placement="bottom"
			isOpen={isOpen}
			target={props.targetElementId}
			toggle={toggle}
		>
			<PopoverHeader>{props.header}</PopoverHeader>
			<PopoverBody>{props.content}</PopoverBody>
		</UncontrolledPopover>
	)
}

export default PopoverHint;