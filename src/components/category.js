import React from 'react'
import sytle from './category.module.css'
import clsx from 'clsx';
import Itemcategory from './Itemcategory'
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Category: [
                {id:1, name: "ryze", status: false},
                {id:1, name: "jayce", status: false},
                {id:1, name: "kata", status: false},
                {id:1, name: "rumble", status: false},
                {id:1, name: "xayah", status: false},
            ]
         }
        }
         itemActive(key){

             let _hienThi = this.state.Category;
             _hienThi.map((item)=>{
                 item.status = false;
             })
             _hienThi[key].status = !_hienThi[key].status;
             this.setState({
                 Category: _hienThi
             })
         }
    
    render() { 
        return ( 
            <div>
                    <ul>
                        {
                            this.state.Category.map((item,key)=>{
                                return <Itemcategory key = {key} click={(e)=>this.itemActive(key,e)} data={item} />
                            })
                        }
                    </ul>
            </div>
         );
    }
}
 
export default Category;