import './IconCard.css'

function IconCard({icon: Icon, iconName}){
    //by add the : Icon, im turning the variable into an Icon component, so now everytime i <Icon/> 
    //it will apply to whatever is in the icon variable
    return(
        <div className="iconCardContainer">
            <Icon className="icon"/>
            <p className='iconCarcP'>{iconName}</p>
        </div>
    );
};

export default IconCard;