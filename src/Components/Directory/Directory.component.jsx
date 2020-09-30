import React from "react";
import MenuItem from "../MenuItem/MenuItem.component";
import "../../Components/Directory/Directory.style.scss";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDerectorySections} from '../../redux/derectory/derectory.selectors'


const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...othersectionprops }) => (
        <MenuItem key={id} {...othersectionprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector(
  {
    sections : selectDerectorySections
  }
)
export default connect(mapStateToProps)(Directory);
