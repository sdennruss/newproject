import React, { useState } from "react";
import MobileNav from "./mobileNav";

const MobileToggle = () => {
	const [expand, setExpand] = useState(false);

	return (
		<React.Fragment>
			<div className="mobile-menu-container">
				<p className="mobile-navigation" onClick={() => setExpand(!expand)}>
					Menu
				</p>
			</div>
			{expand && <MobileNav expand={expand} setExpand={setExpand} />}
		</React.Fragment>
	);
};

export default MobileToggle;
