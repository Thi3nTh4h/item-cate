import React from 'react'
import clsx from 'clsx'
import style from './category.module.css'
class Itemcategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <li className={clsx({[style.active]: this.props.data.status})} onClick={this.props.click}  >{this.props.data.name}</li>
            </div>
         );
    }
}
 
export default Itemcategory;