const TappableButton = ({...props}) => {

    const {onClick, children,...rest} = props;

    return (
        <button {...rest} style={{width:200,height:40,borderRadius:20}} onClick={onClick}> {children}</button>
    )

};

export default TappableButton;