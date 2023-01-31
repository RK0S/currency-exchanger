import cl from './Transfer.module.css';

const Transfer = (props) => {
    const transfer = () => {
        props.setRightCurrency(props.leftCurrency);
        props.setLeftCurrency(props.rightCurrency);
        props.changeRightValue(props.leftValue);
        props.changeLeftValue(props.rightValue);
        props.setLeftLastCurrency(props.rightLastCurrency);
        props.setRightLastCurrency(props.leftLastCurrency);
    };

    return <div className={cl.transfer} onClick={transfer}></div>;
};

export default Transfer;
