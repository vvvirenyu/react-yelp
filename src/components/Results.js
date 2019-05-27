import React,{Component} from 'react';

class Results extends Component{
        render(){
            if(this.props.resultPlaces.results !== undefined){
                var placeList = this.props.resultPlaces.results.map(name =>{
                    return(
                        <div className="row" key={name.id}>
                            <div className="list-group">
                                <div className="clearfix">
                                    <div >
                                        <div ><img src={name.icon} alt="place icon"></img></div>
                                    </div>
                                    <div >
                                        <h4 >{name.name}</h4>
                                        <div >
                                            <div ><span className="">Address</span>{name.formatted_address}</div>
                                            <div ><button onClick={()=>this.props.updateSavedList(name.name)}>Save Place</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            return (
                <ul>
                    {placeList}
                </ul>
            ) 
        }
}
export default Results;