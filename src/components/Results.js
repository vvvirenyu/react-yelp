import React,{Component} from 'react';
import './Results.css'


export default class Results extends Component{
        render(){
            if(this.props.resultPlaces.businesses !== undefined){
                // console.log(this.props.resultPlaces.Results);
                var placeList = this.props.resultPlaces.businesses.map(name =>{
                    return(
                        <div className="row" key={name.id} >
                                <div className="list-group" >
                                    <div className="cards" >
                                        <div >
                                            <div ><img src={name.image_url} alt="icon" float="left" width="70%"></img></div>
                                        </div>
                                        <div >
                                            <h4 float="left" width="50%">{name.name}</h4>
                                            <div >
                                                <div ><span className=""> <strong>Address: </strong></span>{name.location.display_address}</div>
                                                <div ><button onClick={()=>this.props.updateSavedList(name.name)}> <i class="fas fa-star" color="red"></i> Add to Favorites </button></div>
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