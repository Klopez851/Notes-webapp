function IconCard({icon: Icon, iconName}){
    //by add the : Icon, im turning the variable into an Icon component, so now everytime i <Icon/> 
    //it will apply to whatever is in the icon variable
    return(
        <div>
            <Icon color="purple" size='50'/>
            <p>{iconName}</p>
        </div>
    );
};

export default IconCard;